import { DegreeCanvas } from "../../library/DegreeCanvas.js";

export class RegularGraphCanvas extends DegreeCanvas {

    constructor(graph) {
        super(graph);
    }

    force(strength = -500, distance = 40) {
        return super.force(strength, distance);
    }

    message() {
        const sequence = this
            .graph
            .vertices
            .map(vertex => vertex.degree)
            .sort((previous, next) => next - previous);

        let isRegular = false;
        if (sequence.length > 0) isRegular = true;
        for (const index of sequence) {
            if (sequence[index] !== sequence[index + 1]) {
                isRegular = false;
                break;
            }
        }

        let message = String.raw`\text{Degree Sequence}=(`;
        sequence.forEach((vertex, index) => {
            if (index !== sequence.length - 1) message += String.raw`${vertex},`;
            else message += String.raw`${vertex}`;
            if (index % 15 === 14) message += String.raw`\\`;
        });
        message += String.raw`)`;

        if (isRegular) {
            message += String.raw`\\\text{Graph is \\(${sequence[0]}\\)-regular of order }${sequence.length}`;
        }

        return message;
    }

    name() {
        return "regular-graph";
    }

    radius() {
        return 14;
    }
}
