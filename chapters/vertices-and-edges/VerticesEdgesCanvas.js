import { Canvas } from "../../library/Canvas.js";

export class VerticesEdgesCanvas extends Canvas {

    constructor(graph) {
        super(graph);
        this.draw();
        this.latex();
    }

    force(strength = -300, distance = 60) {
        return super.force(strength, distance);
    }

    message() {

        function group(array, elements) {
            const groups = [];
            for (let index = 0; index < array.length; index += elements) {
                groups.push(array.slice(index, index + elements));
            }
            return groups.map(group => group.join(", ")).join(String.raw`\\`);
        }

        const vertices = group(this.graph.vertices.map(vertex => `v_{${vertex.identifier}}`), 15);
        const edges = group(this.graph.edges.map(edge => `v_{${edge.source.identifier}}v_{${edge.target.identifier}}`), 10);
        return String.raw`V=\{${vertices}\}\\E=\{${edges}\}`;
    }

    name() {
        return "vertices-edges";
    }

    spread() {
        // TODO
        // Either keep this method empty
        // Or...
        // You can modify the parent constructor.
    }
}
