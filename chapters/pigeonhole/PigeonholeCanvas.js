import { DegreeSequenceCanvas } from "../degree-sequence/DegreeSequenceCanvas.js";

export class PigeonholeCanvas extends DegreeSequenceCanvas {

    force(strength = -500, distance = 40) {
        return super.force(strength, distance);
    }

    name() {
        return "pigeonhole";
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
