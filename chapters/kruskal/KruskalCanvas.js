import { DisjointSet } from "../../library/DisjointSet.js";
import { MinimumSpanningTreeCanvas } from "../../library/MinimumSpanningTreeCanvas.js";

export class KruskalCanvas extends MinimumSpanningTreeCanvas {

    name() {
        return "kruskal";
    }

    traversal() {
        const edges = [];

        const set = new DisjointSet();
        for (const vertex of this.graph.vertices) {
            set.makeSet(vertex);
        }

        this.graph.edges.sort((previous, next) => previous.weight - next.weight);

        for (const edge of this.graph.edges) {
            const source = set.findSet(edge.source);
            const target = set.findSet(edge.target);
            if (source !== target) {
                edges.push(edge);
                set.union(source, target);
            }
        }

        return edges;
    }
}
