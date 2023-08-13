import { Canvas } from "../../library/Canvas.js";
import { Edge } from "../../library/Edge.js";
import { Utilities } from "../../library/Utilities.js";

export class HavelHakimiCanvas extends Canvas {

    constructor(problems) {
        super(Utilities.clone(problems[0].graph));

        this.problems = problems;
        this.problem = 0;

        d3
            .select("#clear-edges")
            .on("click", () => this.solve());

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

        this.draw();

        this.latex();

        this.solve();
    }

    decrementDegree(edge) {
        this.graph.vertices[edge.source.index].decrement();
        this.graph.vertices[edge.target.index].decrement();
    }

    drawVertex(key) {
        const colors = this.colors();

        const vertices = this
            .vertices
            .enter()
            .append("g")
            .attr("class", "vertex");

        vertices
            .append("circle")
            .attr("r", vertex => this.radius() + 2 * vertex.degree)
            .style("fill", vertex => this.fill(vertex));

        vertices
            .append("title")
            .text(key);

        // TODO Find a better way to center the text in the vertex.
        vertices
            .append("text")
            .attr("y", 4)
            .text(vertex => vertex.degree);

        return vertices;
    }

    endEdge(event, vertex) {
        if (!this.vertex || this.vertex === vertex) return;
        if (vertex.degree === 0) return;
        for (const edge of this.graph.edges) {
            if ((edge.source === this.vertex && edge.target === vertex) || (edge.source === vertex && edge.target === this.vertex)) return;
        }
        const edge = Edge.Builder().withSource(this.vertex).withTarget(vertex).build();
        // TODO Could subclass further.
        this.decrementDegree(edge);
        this.graph.edges.push(edge);
        // Drawing edges again to ensure they are d3.line() and not d3.path().
        this.draw();
        this.validate();
    }

    force(strength = -300, distance = 100) {
        return super.force(strength, distance);
    }

    incrementDegree(edge) {
        this.graph.vertices[edge.source.index].increment();
        this.graph.vertices[edge.target.index].increment();
    }

    listen() {
        this
            .vertices
            .on("mousedown", this.startEdge.bind(this))
            .on("mouseup", this.endEdge.bind(this));

        this
            .edges
            .on("contextmenu", this.removeEdge.bind(this));
    }

    // TODO Should remove call to this.latex().
    // TODO Consequently, should remove LaTeX div.
    message() {
        return String.raw``;
    }

    name() {
        return "havel-hakimi";
    }

    radius() {
        return 12;
    }

    register() {
        this
            .vector
            .on("contextmenu", event => event.preventDefault())
            .on("mouseleave", this.hideEdge.bind(this))
            .on("mousemove", this.updateEdge.bind(this))
            .on("mouseup", this.hideEdge.bind(this));
    }

    removeEdge(event, edge) {
        this.incrementDegree(edge);
        super.removeEdge(event, edge);
    }

    // TODO Recreate this object instead.
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

    startEdge(event, vertex) {
        if (vertex.degree === 0) return;
        super.startEdge(event, vertex);
    }

    tick() {
        super.tick();

        this
            .vertices
            .selectAll("text")
            .text(vertex => vertex.degree);
    }

    validate() {
        for (const vertex of this.graph.vertices) {
            if (vertex.degree !== 0) return;
        }

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
