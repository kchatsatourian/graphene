import { Canvas } from "../../library/Canvas.js";

export class WalkCanvas extends Canvas {

    constructor(graph) {
        super(graph);

        d3
            .select("#clear-walk")
            .on("click", () => this.clearWalk());

        d3
            .select("#reverse-walk")
            .on("click", () => this.reverseWalk());

        this.walk = [];

        this.draw();

        this.latex();
    }

    alpha() {
        return 0.2;
    }

    clear() {
        this.clearWalk();
        super.clear();
        // TODO Should not call this.latex();
    }

    clearWalk() {
        d3.selectAll(".walk-edge").classed("walk-edge", false);
        d3.selectAll(".walk-vertex").classed("walk-vertex", false);
        d3.select(".walk-start").classed("walk-start", false);
        d3.select(".walk-end").classed("walk-end", false);
        this.walk.splice(0);
        this.graph.vertices.forEach(vertex => vertex.degree = 0);
        this.latex();
    }

    decrementDegree(edge) {
        this.graph.vertices[edge.source.index].decrement();
        this.graph.vertices[edge.target.index].decrement();
    }

    extendWalk(event, edge) {
        const object = d3.select(event.currentTarget);
        const source = d3.select(`#v${edge.source.identifier}`);
        const target = d3.select(`#v${edge.target.identifier}`);

        if (object.classed("walk-edge")) {
            if (this.walk.length === 1 && this.walk[0] === edge) {
                this.clearWalk();
                return;
            }

            if (this.walk.length > 1 && this.walk[this.walk.length - 1] === edge) {
                this.walk.pop();
                object.classed("walk-edge", false);

                if (source.classed("walk-end")) {
                    source.classed("walk-end", false);
                    if (edge.source.degree === 1) {
                        source.classed("walk-vertex", false);
                    }
                    target.classed("walk-end", true);
                } else if (target.classed("walk-end")) {
                    target.classed("walk-end", false);
                    if (edge.target.degree === 1) {
                        target.classed("walk-vertex", false);
                    }
                    source.classed("walk-end", true);
                }

                this.decrementDegree(edge);
            }
            return;
        }

        if (this.walk.length === 0) {
            this.walk.push(edge);
            object.classed("walk-edge", true);
            source.classed("walk-start walk-vertex", true);
            target.classed("walk-end walk-vertex", true);
            this.incrementDegree(edge);
        } else if (source.classed("walk-end")) {
            this.walk.push(edge);
            object.classed("walk-edge", true);
            source.classed("walk-end", false);
            target.classed("walk-end walk-vertex", true);
            this.incrementDegree(edge);
        } else if (target.classed("walk-end")) {
            this.walk.push(edge);
            object.classed("walk-edge", true);
            target.classed("walk-end", false);
            source.classed("walk-end walk-vertex", true);
            this.incrementDegree(edge);
        }

        this.latex();
    }

    force(strength = -400, distance = 60) {
        return super.force(strength, distance);
    }

    incrementDegree(edge) {
        this.graph.vertices[edge.source.index].increment();
        this.graph.vertices[edge.target.index].increment();
    }

    listen() {
        this
            .vertices
            .on("contextmenu", this.removeVertex.bind(this))
            .on("mousedown", this.startEdge.bind(this))
            .on("mouseup", this.endEdge.bind(this));

        this
            .edges
            .on("click", this.extendWalk.bind(this))
            .on("contextmenu", this.removeEdge.bind(this))
            .on("mousedown", event => event.stopPropagation());
    }

    message() {
        if (this.walk.length === 0) {
            return String.raw`\text{Create a Walk}`;
        }

        let vertex = d3.select(".walk-start").datum();
        let message = String.raw`\text{Walk: }v_{${vertex.identifier}}`;

        this.walk.forEach((edge, index) => {
            if (edge.source === vertex) {
                vertex = edge.target;
            } else if (edge.target === vertex) {
                vertex = edge.source;
            }

            message += String.raw`\to v_{${vertex.identifier}}`;
            if ((index + 1) % 10 === 0) message += String.raw`\\`;
        });

        return String.raw`${message}\\\text{Length of walk} = ${this.walk.length}`;
    }

    name() {
        return "walk";
    }

    removeEdge(event, edge) {
        if (d3.select(event.currentTarget).classed("walk-edge")) return;
        this.decrementDegree(edge);
        super.removeEdge(event, edge);
        // TODO Should not call this.latex();
    }

    removeVertex(event, vertex) {
        if (d3.select(event.currentTarget).classed("walk-vertex")) return;
        super.removeVertex(event, vertex);
    }

    reverseWalk() {
        if (this.walk.length === 0) return;
        this.walk.reverse();
        const start = d3.select(".walk-start");
        const end = d3.select(".walk-end");
        if (start.attr("id") !== end.attr("id")) {
            start.classed("walk-start", false);
            start.classed("walk-end", true);
            end.classed("walk-start", true);
            end.classed("walk-end", false);
        }
        this.latex();
    }

    spread() {
        this
            .graph
            .vertices
            // TODO ConnectivityCanvas requires a different spread() method.
            // .forEach((vertex, index) => vertex.x = vertex.y = (width / this.graph.order()) * index)
            .forEach((vertex, index) => vertex.x = vertex.y = (index * width) / this.graph.order());
    }
}
