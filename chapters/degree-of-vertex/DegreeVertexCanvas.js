import { DegreeCanvas } from "../../library/DegreeCanvas.js";

export class DegreeVertexCanvas extends DegreeCanvas {

    constructor(graph) {
        super(graph);
    }

    message() {
        let minimum = Infinity, maximum = 0;

        this
            .graph
            .vertices
            .forEach(vertex => {
                if (vertex.degree > maximum) maximum = vertex.degree;
                if (vertex.degree < minimum) minimum = vertex.degree;
            });

        if (this.graph.order()) {
            return String.raw`\delta(G)=${minimum}\\\Delta(G)=${maximum}`;
        }

        return String.raw`\text{G is null}`;
    }

    name() {
        return "degree-vertex";
    }
}
