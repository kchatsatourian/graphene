import { DegreeCanvas } from "../../library/DegreeCanvas.js";

export class CompleteGraphCanvas extends DegreeCanvas {

    constructor(graph) {
        super(graph);
    }

    force(strength = -300, distance = 100) {
        return super.force(strength, distance);
    }

    message() {
        const sequence = this
            .graph
            .vertices
            .map(vertex => vertex.degree)
            .sort((previous, next) => next - previous);

        let message = String.raw`\text{Degree Sequence}=(`;
        sequence.forEach((vertex, index) => {
            if (index !== sequence.length - 1) message += String.raw`${vertex},`;
            else message += String.raw`${vertex}`;
            if (index % 15 === 14) message += String.raw`\\`;
        });
        message += String.raw`)`;

        const order = this.graph.order();
        const size = this.graph.size();

        if (order > 0 && 2 * size === order * (order - 1)) {
            message += String.raw`\\\text{It's a complete graph (}K_{${sequence.length}} \text{).}`;
        }

        return message;
    }

    name() {
        return "complete-graph";
    }

    radius() {
        return 14;
    }

    spread() {
        this
            .graph
            .vertices
            .forEach((vertex, index) => {
                vertex.x = vertex.y = (width / this.graph.order()) * index;
                if (index % 2 === 0) vertex.x = vertex.y;
                else vertex.x = width - vertex.y;
            });
    }
}
