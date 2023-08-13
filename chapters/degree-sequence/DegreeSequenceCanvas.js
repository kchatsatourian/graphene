import { DegreeCanvas } from "../../library/DegreeCanvas.js";

export class DegreeSequenceCanvas extends DegreeCanvas {

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

        return message;
    }

    name() {
        return "degree-sequence";
    }
}
