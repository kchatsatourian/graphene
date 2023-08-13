import { EulerianCanvas } from "../../library/EulerianCanvas.js";

export class EulerianTrailCanvas extends EulerianCanvas {

    constructor(problems) {
        super(problems);
    }

    alpha() {
        return 0.8;
    }

    force(strength = -400, distance = 100) {
        return super.force(strength, distance);
    }

    name() {
        return "eulerian-trail";
    }
}
