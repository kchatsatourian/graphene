import { Canvas } from "../../library/Canvas.js";
import { Edge } from "../../library/Edge.js";
import { Vertex } from "../../library/Vertex.js";

export class RootedTreesCanvas extends Canvas {

    constructor(graph) {
        super(graph);

        this
            .force
            .nodes(this.graph.vertices);

        this
            .force
            .force("link")
            .links(this.graph.edges);

        this
            .graph
            .vertices
            .forEach(vertex => {
                vertex.children = [];
                vertex.parent = null;
            });

        this
            .graph
            .edges
            .forEach(edge => {
                edge.source.children.push(edge.target);
                edge.target.parent = edge;
            });

        this.increaseDepth(this.graph.vertices[0], 0);
        this.height();

        this.draw();

        d3
            .select(this.vertices.nodes()[0])
            .classed("root", true);

        this.latex();
    }

    addVertex(event, parent) {
        if (event.ctrlKey) return;

        if (event.button === 0) {
            const [latitude, longitude] = d3.pointer(event, event.currentTarget);
            const vertex = Vertex.Builder().withColor(parent.depth % 2).withDepth(parent.depth + 1).withOrdinate(latitude).withAbscissa(longitude).build();
            vertex.children = [];
            const edge = Edge.Builder().withSource(parent).withTarget(vertex).build();
            vertex.parent = edge;
            parent.children.push(vertex);
            this.graph.vertices.push(vertex);
            this.graph.edges.push(edge);
            this.draw();
            this.latex();
        }
    }

    alpha() {
        return 0.6;
    }

    clear() {
        this.graph.vertices.splice(1);
        this.graph.edges.splice(0);
        // TODO children must be an array containing all children vertices.
        this.graph.vertices[0].children.splice(1);
        this.draw();
        this.latex();
    }

    colors() {
        return ["#e377c2", "#17becf"];
    }

    drag() {
        return d3
            .drag()
            .filter(event => event.button === 0 || event.button === 2)
            .on("start", (event, vertex) => {
                if (!event.active) this.force.alphaTarget(1).restart();
                vertex.fx = vertex.x;
                vertex.fy = vertex.y;
            })
            .on("drag", (event, vertex) => {
                vertex.fx = event.x;
                vertex.fy = event.y;
            })
            .on("end", (event, vertex) => {
                if (!event.active) this.force.alphaTarget(0);
                if (vertex.identifier === 1) {
                    vertex.fx = event.x;
                    vertex.fy = event.y;
                    return;
                }
                vertex.fx = null;
                vertex.fy = null;
            });
    }

    drawVertex(key) {
        const colors = this.colors();

        const vertices = this
            .vertices
            .enter()
            .append("g")
            .attr("class", "vertex");

        vertices
            .append("circle")
            .attr("r", this.radius)
            .style("fill", vertex => this.fill(vertex));

        vertices
            .append("title")
            .text(vertex => {
                let string = `v${vertex.identifier}`;
                if (vertex.identifier !== 1) {
                    string += `\nParent: ${vertex.parent.source.identifier}`;
                }
                return string + `\nDepth: ${vertex.depth}\nLevel: ${vertex.depth + 1}`;
            });

        return vertices;
    }

    fill(vertex) {
        const colors = this.colors();
        const length = colors.length;
        return colors[vertex.depth % length];
    }

    force(strength = -100, distance = 30) {
        return super.force(strength, distance);
    }

    height() {
        let depth = 0;
        this
            .graph
            .vertices
            .forEach(vertex => depth = Math.max(depth, vertex.depth));
        return depth;
    }

    increaseDepth(vertex, depth) {
        vertex.depth = depth;
        vertex
            .children
            .forEach(vertex => this.increaseDepth(vertex, depth + 1));
    }

    listen() {
        this
            .vertices
            .on("mousedown", this.addVertex.bind(this))
            .on("contextmenu", this.removeVertex.bind(this));
    }

    message() {
        return String.raw`\text{Height of tree is ${this.height()}}`;
    }

    name() {
        return "rooted-trees";
    }

    register() {
        this
            .vector
            .on("contextmenu", event => event.preventDefault());
    }

    removeTree(vertex) {
        while (vertex.children.length) {
            this.removeTree(vertex.children[0]);
        }
        const parent = vertex.parent.source;
        parent.children.splice(parent.children.indexOf(vertex), 1);
        this.graph.edges.splice(this.graph.edges.indexOf(vertex.parent), 1);
        this.graph.vertices.splice(this.graph.vertices.indexOf(vertex), 1);
    }

    removeVertex(event, vertex) {
        // Allows the movement of vertices for macOS users.
        if (event.ctrlKey || vertex.identifier === 1) return;
        this.removeTree(vertex);
        this.height();
        this.draw();
        this.latex();
    }

    spread() {
        this
            .graph
            .vertices
            .forEach((vertex, index) => vertex.x = vertex.y = (index * width) / this.graph.order());
    }
}
