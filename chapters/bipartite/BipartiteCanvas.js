import { DegreeCanvas } from "../../library/DegreeCanvas.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { Vertices } from "../../library/Vertices.js";

export class BipartiteCanvas extends DegreeCanvas {

    constructor(graph) {
        super(graph);

        this.validate();
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
            .style("fill", vertex => {
                if (!vertex.degree) return colors[length];
                if (vertex.parity) return colors[vertex.parity % length];
                else return colors[vertex.identifier % length];
            });
    }

    colors() {
        return super.colors().concat(["#8aff33", "#ff5733", "#cccccc"]);
    }

    // TODO endEdge(event) should not call this.latex()
    endEdge(event, vertex) {
        super.endEdge(event, vertex);
        this.validate();
    }

    fill(vertex) {
        const colors = this.colors();
        const length = colors.length - 1;
        if (!vertex.degree) return colors[length];
        return colors[vertex.identifier % length];
    }

    force(strength = -300, distance = 100) {
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
        let message;

        if (this.isBipartite) {
            const sets = ["", ""];
            const counters = [0, 0];

            this
                .graph
                .vertices
                .forEach(vertex => {
                    if (vertex.parity === 1) {
                        counters[0]++;
                        sets[0] += String.raw`v_{${vertex.identifier}},`;
                        if (counters[0] % 12 === 0) sets[0] += "\\\\";
                    } else if (vertex.parity === 2) {
                        counters[1]++;
                        sets[1] += String.raw`v_{${vertex.identifier}},`;
                        if (counters[1] % 12 === 0) sets[1] += "\\\\";
                    }
                });

            //modify sets to make Latex text look nicer
            if (counters[0] % 12 === 0) {
                sets[0] = sets[0].slice(0, -3);
            } else {
                sets[0] = sets[0].slice(0, -1);
            }

            if (counters[1] % 12 === 0) {
                sets[1] = sets[1].slice(0, -3);
            } else {
                sets[1] = sets[1].slice(0, -1);
            }
            message = String.raw`\text{Set } A = \{${sets[0]}\}\\\text{Set } B = \{${sets[1]}\}`;
        } else if (this.isBipartite !== false) {
            message = String.raw`\text{Draw bipartite graph.}`;
        } else message = String.raw`\text{Not Bipartite}`;

        return message;
    }

    name() {
        return "bipartite";
    }

    parity() {
        this
            .graph
            .vertices
            .forEach(vertex => {
                vertex.parity = 0;
                vertex.visited = false;
            });
    }

    radius() {
        return 16;
    }

    register() {
        this
            .vector
            .on("contextmenu", event => event.preventDefault())
            .on("mousedown", this.addVertex.bind(this))
            .on("mouseleave", this.hideEdge.bind(this))
            .on("mousemove", this.updateEdge.bind(this))
            .on("mouseup", this.hideEdge.bind(this));
    }

    // TODO removeEdge(event) should not call this.latex()
    removeEdge(event, edge) {
        super.removeEdge(event, edge);
        this.validate();
    }

    // TODO removeVertex(event) should not call this.latex()
    removeVertex(event, vertex) {
        super.removeVertex(event, vertex);
        this.validate();
    }

    validate() {
        if (this.graph.order() === 0) {
            this.isBipartite = null;
            this.latex();
            return;
        }
        this.parity();

        const array = [];
        this.graph.vertices.forEach(vertex => array[vertex.identifier] = []);
        this.graph.edges.forEach(edge => {
            array[edge.source.identifier].push(edge.target);
            array[edge.target.identifier].push(edge.source);
        });

        const queue = [];
        queue.push(this.graph.vertices[0]);

        while (queue.length > 0) {
            const source = queue.shift();
            const adjacent = array[source.identifier];

            if (adjacent.length > 0 && source.parity === 0) source.parity = 1;

            for (const target of adjacent) {
                if (target.visited) continue;
                if (target.parity === source.parity) {
                    this.parity();
                    this.color();
                    this.isBipartite = false;
                    this.latex();
                    return;
                } else target.parity = 3 - source.parity;
                queue.push(target);
            }

            source.visited = true;
            if (queue.length === 0) {
                for (const vertex of this.graph.vertices) {
                    if (!vertex.visited) {
                        queue.push(vertex);
                        break;
                    }
                }
            }
        }

        this.color();
        this.isBipartite = true;
        this.latex();
    }
}
