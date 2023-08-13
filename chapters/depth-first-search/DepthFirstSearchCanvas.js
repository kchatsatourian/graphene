import { SpanningTreeCanvas } from "../../library/SpanningTreeCanvas.js";

export class DepthFirstSearchCanvas extends SpanningTreeCanvas {

    name() {
        return "depth-first-search";
    }

    search(vertex, visited) {
        visited.add(vertex);
        const edges = [];
        for (const neighbor of this.graph.neighbors(vertex)) {
            if (!visited.has(neighbor)) {
                // TODO This is a hack to get the edge.
                let edge = this.graph.edges.find(vertex, neighbor);
                if (edge === undefined || edge === null) {
                    edge = this.graph.edges.find(neighbor, vertex);
                }
                edges.push(edge);
                edges.push(...this.search(neighbor, visited));
            }
        }
        return edges;
    }
}
