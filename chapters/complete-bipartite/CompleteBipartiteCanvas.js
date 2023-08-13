import { BipartiteCanvas } from "../bipartite/BipartiteCanvas.js";

export class CompleteBipartiteCanvas extends BipartiteCanvas {

    constructor(graph) {
        super(graph);

        this.spread();
    }

    message() {
        if (this.isBipartite) {
            const counters = [0, 0];

            this
                .graph
                .vertices
                .forEach(vertex => {
                    if (vertex.parity === 1) counters[0]++;
                    else if (vertex.parity === 2) counters[1]++;
                });

            if (this.graph.size() === counters[0] * counters[1]) {
                return String.raw`\text{Complete Bipartite $(K{_{${counters[0]},${counters[1]}}})$}\\|E|=${counters[0]}\cdot${counters[1]}=${this.graph.size()}`;
            } else {
                return String.raw`\text{Bipartite, but not complete.}`;
            }
        } else if (this.isBipartite !== false) {
            return String.raw`\text{Draw something bipartite.}`;
        } else {
            return String.raw`\text{Not Bipartite}`;
        }
    }

    name() {
        return "complete-bipartite";
    }
}
