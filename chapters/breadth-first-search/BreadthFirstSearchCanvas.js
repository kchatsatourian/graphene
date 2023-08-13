import { SpanningTreeCanvas } from "../../library/SpanningTreeCanvas.js";

export class BreadthFirstSearchCanvas extends SpanningTreeCanvas {

    name() {
        return "breadth-first-search";
    }

    search(vertex, visited) {
        const queue = new Array(vertex);
        visited.add(vertex);
        const edges = [];
        while (queue.length > 0) {
            const vertex = queue.shift();
            for (const neighbor of this.graph.neighbors(vertex)) {
                if (!visited.has(neighbor)) {
                    // TODO This is a hack to get the edge.
                    let edge = this.graph.edges.find(vertex, neighbor);
                    if (edge === undefined || edge === null) {
                        edge = this.graph.edges.find(neighbor, vertex);
                    }
                    edges.push(edge);
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
        return edges;
    }
}
