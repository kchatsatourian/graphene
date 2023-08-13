import { WalkCanvas } from "../walk/WalkCanvas.js";

export class OpenClosedWalks extends WalkCanvas {

    force(strength = -300, distance = 100) {
        return super.force(strength, distance);
    }

    message() {
        if (this.walk.length === 0) {
            return String.raw`\text{Create a Walk}`;
        }

        let vertexRep = false;

        let vertex = d3.select(".walk-start").datum();
        let message = String.raw`\text{Walk: }v_{${vertex.identifier}}`;

        this.walk.forEach((edge, index) => {
            if (edge.source === vertex) {
                vertex = edge.target;
            } else if (edge.target === vertex) {
                vertex = edge.source;
            }

            if (vertex.degree > 2) {
                vertexRep = true;
            }

            message += String.raw`\to v_{${vertex.identifier}}`;
            if ((index + 1) % 10 === 0) {
                message += String.raw`\\`;
            }
        });

        if (d3.select(".walk-start").attr("id") === d3.select(".walk-end").attr("id")) {
            message += String.raw`\\\text{This walk is closed. }`;
            if (vertexRep) {
                return String.raw`${message}\text{It is an example of Circuit.}`;
            } else {
                return String.raw`${message}\text{It is both a Circuit and a Cycle.}`;
            }
        } else {
            message += String.raw`\\\text{This walk is open. }`;
            if (vertexRep) {
                return String.raw`${message}\text{It is an example of Trail.}`;
            } else {
                return String.raw`${message}\text{It is both a Trail and a Path.}`;
            }
        }
    }

    name() {
        return "open-vs-closed";
    }

    spread() {
        this
            .graph
            .vertices
            .forEach(vertex => {
                vertex.x += Math.random() * 100 - 50;
                vertex.y += Math.random() * 100 - 50;
            });
    }
}
