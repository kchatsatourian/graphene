export class Graph {

    constructor(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
    }

    neighbors(vertex) {
        const neighbors = new Set();
        for (const edge of this.edges) {
            if (edge.source === vertex) {
                neighbors.add(edge.target);
            } else if (edge.target === vertex) {
                neighbors.add(edge.source);
            }
        }
        return neighbors;
    }

    order() {
        return this.vertices.length;
    }

    size() {
        return this.edges.length;
    }
}
