import { Canvas } from "../../library/Canvas.js";
import { Utilities } from "../../library/Utilities.js";

export class SpanningTreeCanvas extends Canvas {

    constructor(problems) {
        super(Utilities.clone(problems[0].graph));

        this.problems = problems;
        this.problem = 0;

        d3
            .select("#canvas")
            .append("div")
            .attr("id", "graph-overlay")
            .append("div")
            .attr("id", "overlay-text")
            .html("Game Over!<br>You disconnected the graph.<br>Try again.");

        d3
            .select("#prev-prob")
            .on("click", () => {
                if (this.problem > 0) {
                    this.problem--;
                    this.solve();
                }
            });

        d3
            .select("#next-prob")
            .on("click", () => {
                if (this.problem < this.problems.length - 1) {
                    this.problem++;
                    this.solve();
                }
            });

        this.pagination = d3.select("#problems");

        this
            .pagination
            .selectAll("a")
            .on("click", event => {
                const element = event.currentTarget.closest("li");
                const elements = Array.from(element.closest("ul").children);
                this.problem = elements.indexOf(element);
                this.solve();
            });

        // this.draw();
        // this.latex();
        this.solve();
    }

    alpha() {
        return 0.6;
    }

    check() {
        let vertex = this.graph.vertices[0];

        const visited = new Set([vertex]);
        const queue = [vertex];
        let connected = 0;

        while (queue.length) {
            vertex = queue.shift();
            connected++;
            for (const neighbor of this.graph.neighbors(vertex)) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }

        return connected !== this.graph.order();
    }

    force(strength = -300, distance = 80) {
        return super.force(strength, distance);
    }

    listen() {
        this
            .edges
            .on("contextmenu", this.removeEdge.bind(this));
    }

    message() {
        const edges = this.graph.size() - this.graph.order() + 1;

        if (edges === -1) {
            return String.raw`\text{Blast!}`;
        } else if (edges === 0) {
            return String.raw`\text{Now that is a spanning tree.}`;
        }

        return String.raw`\text{Delete ${edges} more edges.}`;
    }

    name() {
        return "spanning-tree";
    }

    register() {
        this
            .vector
            .on("contextmenu", event => event.preventDefault());
    }

    removeEdge(event, edge) {
        if (this.graph.order() - 1 === this.graph.size()) {
            return;
        }
        super.removeEdge(event, edge);
        this.validate();
    }

    solve() {
        $("#graph-overlay").fadeOut();

        this.clear();

        this.graph = Utilities.clone(this.problems[this.problem].graph);

        this.draw();

        if (this.problem === 0) {
            $("#prev-prob").attr("hidden", true);
            $("#next-prob").removeAttr("hidden");
        } else if (this.problem === this.problems.length - 1) {
            $("#prev-prob").removeAttr("hidden");
            $("#next-prob").attr("hidden", true);
        } else {
            $("#prev-prob").removeAttr("hidden");
            $("#next-prob").removeAttr("hidden");
        }

        this
            .pagination
            .select(".prob-current")
            .classed("prob-current", false);

        this
            .pagination
            .selectAll("a")
            .each((element, index, elements) => {
                if (index === this.problem) d3.select(elements[index]).classed("prob-current", true);
            });

        this.validate();
    }

    validate() {
        if (this.check()) {
            $("#graph-overlay").fadeIn();
            setTimeout(() => this.solve(), 2500);
            this.latex();
            return;
        }

        this.latex();

        if (this.graph.order() - 1 === this.graph.size() && this.problem < this.problems.length - 1) {
            this
                .pagination
                .selectAll("a")
                .each((element, index, elements) => {
                    if (index === this.problem) d3.select(elements[index]).classed("prob-solved", true);
                });
            this.problem++;
            setTimeout(() => this.solve(), 2500);
        }
    }
}
