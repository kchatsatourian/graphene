import { Canvas } from "./Canvas.js";
import { Edge } from "./Edge.js";

export class DegreeCanvas extends Canvas {

    constructor(graph) {
        super(graph);
        this.draw();
        this.latex();
    }

    decrementDegree(edge) {
        this.graph.vertices[edge.source.index].decrement();
        this.graph.vertices[edge.target.index].decrement();
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

    endEdge(event, vertex) {
        if (!this.vertex || this.vertex === vertex) return;
        //return if link already exists
        for (const edge of this.graph.edges) {
            if ((edge.source === this.vertex && edge.target === vertex) || (edge.source === vertex && edge.target === this.vertex)) return;
        }
        const edge = Edge.Builder().withSource(this.vertex).withTarget(vertex).build();
        this.incrementDegree(edge);
        this.graph.edges.push(edge);
        // Drawing edges again to ensure they are d3.line() and not d3.path().
        this.draw();
        this.latex();
    }

    force(strength = -300, distance = 100) {
        return super.force(strength, distance);
    }

    incrementDegree(edge) {
        this.graph.vertices[edge.source.index].increment();
        this.graph.vertices[edge.target.index].increment();
    }

    radius() {
        return 12;
    }

    removeEdge(event, edge) {
        this.decrementDegree(edge);
        super.removeEdge(event, edge);
    }

    removeVertex(event, vertex) {
        // Allows the movement of vertices for macOS users.
        if (event.ctrlKey) return;

        this
            .graph
            .edges
            .filter(edge => edge.source.identifier === vertex.identifier || edge.target.identifier === vertex.identifier)
            .map(edge => {
                this.decrementDegree(edge);
                this.graph.edges.remove(edge);
            });

        this
            .graph
            .vertices
            .remove(vertex);

        this.draw();
        this.latex();
    }

    tick() {
        super.tick();

        this
            .vertices
            .selectAll("text")
            .text(vertex => vertex.degree);
    }
}
