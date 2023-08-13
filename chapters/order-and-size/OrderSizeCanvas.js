import { Canvas } from "../../library/Canvas.js";

export class OrderSizeCanvas extends Canvas {

    constructor(graph) {
        super(graph);
        this.draw();
        this.latex();
    }

    force(strength = -500, distance = 100) {
        return super.force(strength, distance);
    }

    message() {
        const order = this.graph.order();
        const size = this.graph.size();

        let message = String.raw`\text{Order}=${order}\\\text{Size}=${size}`;
        if (order > 0 && 2 * size === order * (order - 1)) {
            message += String.raw`\\\text{Size maximized!}`;
        }

        return message;
    }

    name() {
        return "order-size";
    }
}
