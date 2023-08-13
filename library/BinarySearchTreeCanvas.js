import { Canvas } from "./Canvas.js";
import { Edge } from "./Edge.js";
import { Edges } from "./Edges.js";
import { Graph } from "./Graph.js";
import { Vertex } from "./Vertex.js";
import { Vertices } from "./Vertices.js";

export class BinarySearchTreeCanvas extends Canvas {

    constructor(nodes) {
        const vertices = new Vertices();
        const edges = new Edges();

        for (const node of nodes) {
            vertices.push(Vertex.Builder().build());

            if (node.left) {
                edges.push(Edge.Builder().withSource(node.value).withTarget(node.left).build());
            }

            if (node.right) {
                edges.push(Edge.Builder().withSource(node.value).withTarget(node.right).build());
            }
        }

        const graph = new Graph(vertices, edges);

        super(graph);

        this.nodes = nodes;

        this.draw();
        this.latex();
    }

    alpha() {
        return 0.6;
    }

    drawVertex(key) {
        const vertices = super.drawVertex(key);

        // TODO Find a better way to center the text in the vertex.
        vertices
            .append("text")
            .attr("y", 4)
            .text(key);

        return vertices;
    }

    force(strength = -300, distance = 80) {
        return super.force(strength, distance);
    }

    listen() {
        this
            .edges
            .on("mousedown", event => event.stopPropagation());
    }

    message() {
        return String.raw`Traversal=\{${this.traversal()}\}`;
    }

    register() {
        this
            .vector
            .on("contextmenu", event => event.preventDefault());
    }

    traversal() {
        throw new Error("You need to implement the traversal() method.");
    }
}
