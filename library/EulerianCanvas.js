import { Utilities } from "./Utilities.js";
import { WalkCanvas } from "../chapters/walk/WalkCanvas.js";

export class EulerianCanvas extends WalkCanvas {

    constructor(problems) {
        super(Utilities.clone(problems[0].graph));

        this.problems = problems;
        this.problem = 0;

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

        this.solve();
    }

    drawVertex(key) {
        const vertices = super.drawVertex(key);

        // TODO Find a better way to center the text in the vertex.
        vertices
            .append("text")
            .attr("y", 4)
            .text(vertex => vertex.degree);

        return vertices;
    }

    extendWalk(event, edge) {
        super.extendWalk(event, edge);
        this.validate();
    }

    force(strength = -400, distance = 120) {
        return super.force(strength, distance);
    }

    listen() {
        this
            .vertices
            .on("mousedown", event => event.stopPropagation());

        this
            .edges
            .on("click", this.extendWalk.bind(this))
            .on("mousedown", event => event.stopPropagation());
    }

    // TODO Should remove call to this.latex().
    // TODO Consequently, should remove LaTeX div.
    message() {
        return String.raw``;
    }

    name() {
        throw new Error("You need to implement the name() method.");
    }

    radius() {
        return 14;
    }

    register() {
        this
            .vector
            // TODO This does not work.
            // .on("mouseleave", this.draw.bind(this))
            .on("contextmenu", event => event.preventDefault());
    }

    solve() {
        this.clear();

        this.graph = Utilities.clone(this.problems[this.problem].graph);

        this.spread();
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
    }

    validate() {
        if ($(".walk-edge").length !== this.graph.size()) return;

        this
            .pagination
            .selectAll("a")
            .each((element, index, elements) => {
                if (index === this.problem) d3.select(elements[index]).classed("prob-solved", true);
            });

        if (this.problem < this.problems.length - 1) {
            this.problem++;
            setTimeout(() => this.solve(), 1000);
        }
    }
}
