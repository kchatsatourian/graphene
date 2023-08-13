import { MinimumSpanningTreeCanvas } from "../../library/MinimumSpanningTreeCanvas.js";

export class PrimCanvas extends MinimumSpanningTreeCanvas {

    name() {
        return "prim";
    }

    traversal() {
        const edges = [];

        for (const vertex of this.graph.vertices) {
            if (this.graph.neighbors(vertex).size === 0) {
                return;
            }
            vertex.selected = false;
        }

        this.graph.vertices.first().selected = true;

        while (edges.length < this.graph.order() - 1) {
            let minimum = Infinity;
            let vertex;
            let edge;

            for (const source of this.graph.vertices) {
                if (!source.selected) continue;
                for (const target of this.graph.vertices) {
                    if (target.selected) continue;

                    let temporary = this.graph.edges.find(source, target);
                    if (!temporary) {
                        temporary = this.graph.edges.find(target, source);
                    }

                    if (temporary) {
                        if (minimum > temporary.weight) {
                            vertex = target;
                            edge = temporary;
                            minimum = edge.weight;
                        }
                    }
                }
            }

            if (vertex) {
                vertex.selected = true;
            }

            if (edge) {
                edges.push(edge);
            }
        }

        return edges;
    }
}
