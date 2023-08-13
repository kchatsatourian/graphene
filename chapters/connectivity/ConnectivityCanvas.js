import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { Vertices } from "../../library/Vertices.js";
import { WalkCanvas } from "../walk/WalkCanvas.js";

export class ConnectivityCanvas extends WalkCanvas {

    constructor(graph) {
        super(graph);

        this.validate();
    }

    addVertex(event) {
        super.addVertex(event);
        this.validate();
    }

    alpha() {
        return 0.3;
    }

    clear() {
        super.clear();
        this.validate();
    }

    color() {
        const colors = this.colors();
        const length = colors.length - 1;

        this
            .vertices
            .selectAll("circle")
            .style("fill", vertex => colors[vertex.group % length]);
    }

    endEdge(event, vertex) {
        super.endEdge(event, vertex);
        this.validate();
    }

    force(strength = -300, distance = 60) {
        return super.force(strength, distance);
    }

    load() {
        this.clear();
        const graph = JSON.parse(event.currentTarget.result);
        const edges = Object.assign(new Edges(), graph.edges);
        const vertices = Object.assign(new Vertices(), graph.vertices);
        this.graph = new Graph(vertices, edges);
        this.draw();
        this.validate();
    }

    message() {
        if (this.groups === 0) {
            return String.raw`\text{Draw something.}`;
        } else if (this.groups === 1) {
            return String.raw`\text{There is only one connected component in this graph. Hence, the graph is connected.}`;
        } else {
            return String.raw`\text{There are ${this.groups} connected components in this graph. It is a disconnected graph.}`;
        }
    }

    name() {
        return "connectivity";
    }

    removeEdge(event, edge) {
        super.removeEdge(event, edge);
        this.validate();
    }

    removeVertex(event, vertex) {
        super.removeVertex(event, vertex);
        this.validate();
    }

    validate() {
        if (this.graph.order() === 0) {
            this.groups = 0;
            this.latex();
            return;
        }

        const visited = new Set();

        const queue = [this.graph.vertices[0]];

        this.groups = 1;

        while (queue.length > 0) {
            const source = queue.shift();
            source.group = this.groups;
            visited.add(source);

            for (const target of this.graph.neighbors(source)) {
                if (visited.has(target)) continue;
                queue.push(target);
            }

            if (queue.length === 0) {
                for (const vertex of this.graph.vertices) {
                    if (!visited.has(vertex)) {
                        queue.push(vertex);
                        this.groups++;
                        break;
                    }
                }
            }
        }

        this.color();
        this.latex();
    }
}
