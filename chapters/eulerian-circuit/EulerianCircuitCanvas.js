import { EulerianCanvas } from "../../library/EulerianCanvas.js";

export class EulerianCircuitCanvas extends EulerianCanvas {

    constructor(problems) {
        super(problems);
    }

    alpha() {
        return 0.4;
    }

    force(strength = -400, distance = 120) {
        return super.force(strength, distance);
    }

    name() {
        return "eulerian-circuit";
    }
}
