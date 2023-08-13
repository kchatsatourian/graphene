import { Canvas } from "./Canvas.js";

export class SpanningTreeCanvas extends Canvas {

    constructor(graph) {
        super(graph);
        this.draw();
        this.latex();
    }

    alpha() {
        return 0.6;
    }

    drawVertex(key) {
        const vertices = super.drawVertex(key);

        // TODO Find a better way to center the text in the vertex.
        vertices
            .append("text")
            .attr("y", 4)
            .text(key);

        return vertices;
    }

    force(strength = -300, distance = 80) {
        return super.force(strength, distance);
    }

    message() {
        d3
            .selectAll("line")
            .transition()
            .style("stroke", "#888");

        const edges = this.traversal();

        d3
            .selectAll("line")
            .filter(edge => edges.includes(edge))
            .transition()
            .duration(1000)
            .delay((edge, index) => index * 1000)
            .style("stroke", "red");

        d3
            .selectAll("line")
            .filter(edge => !edges.includes(edge))
            .transition()
            .duration(1000)
            .delay((edge, index) => index * 1000)
            .remove();

        const set = new Set();
        for (const edge of this.graph.edges) {
            if (!edges.includes(edge)) {
                set.add(edge);
            }
        }
        set.forEach(edge => this.graph.edges.remove(edge));

        const tree = edges
            .map(edge => `v_{${edge.source.identifier}}v_{${edge.target.identifier}}`)
            .join(", ");

        return String.raw`Tree=\{${tree}\}`;
    }

    search(vertex, visited) {
        throw new Error("You need to implement the search(vertex, visited) method.");
    }

    tick() {
        super.tick();

        this
            .edges
            .selectAll(".weight")
            .attr("transform", edge => `translate(${(edge.source.x + edge.target.x) / 2},${(edge.source.y + edge.target.y) / 2})`);
    }

    traversal() {
        const visited = new Set();
        const edges = [];
        for (const vertex of this.graph.vertices) {
            if (!visited.has(vertex)) {
                edges.push(...this.search(vertex, visited));
            }
        }
        return edges;
    }
}
