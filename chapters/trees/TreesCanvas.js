import { Canvas } from "../../library/Canvas.js";

export class TreesCanvas extends Canvas {

    constructor(graph) {
        super(graph);
        this.draw();
        this.latex();
        this.validate();
    }

    alpha() {
        return 0.6;
    }

    force(strength = -300, distance = 80) {
        return super.force(strength, distance);
    }

    message() {
        if (this.graph.order() === 0) {
            return String.raw`\text{Null Graph. Draw something.}`;
        } else if (this.validate()) {
            return String.raw`\text{There is cycle. Remove it.}`;
        } else if (this.graph.order() === this.graph.size() + 1) {
            return String.raw`\text{It is a tree with } |V|=${this.graph.order()}, |E|=${this.graph.size()}`;
        }

        return String.raw`\text{This is a forest.}`;
    }

    name() {
        return "trees";
    }

    spread() {
        this
            .graph
            .vertices
            .forEach((vertex, index) => vertex.x = vertex.y = (index * width) / this.graph.order());
    }

    validate() {
        const visited = new Set();
        const parent = new Map();

        const queue = [this.graph.vertices[0]];
        parent.set(this.graph.vertices[0], null);

        while (queue.length > 0) {
            const source = queue.shift();
            visited.add(source);

            for (const target of this.graph.neighbors(source)) {
                if (visited.has(target) && parent.get(source) !== target) return true;
                if (!visited.has(target)) {
                    queue.push(target);
                    parent.set(target, source);
                }
            }

            if (queue.length === 0) {
                for (const vertex of this.graph.vertices) {
                    if (!visited.has(vertex)) {
                        queue.push(vertex);
                        parent.set(vertex, null);
                        break;
                    }
                }
            }
        }

        return false;
    }
}
