import { Edge } from "./Edge.js";
import { Edges } from "./Edges.js";
import { Graph } from "./Graph.js";
import { Vertex } from "./Vertex.js";
import { Vertices } from "./Vertices.js";

export class Canvas {

    constructor(graph) {
        this.graph = graph;

        this.parity();
        this.spread();

        this.vector = d3
            .select("#canvas")
            .append("div")
            .attr("id", "graph-area")
            .append("svg")
            .attr("height", height)
            .attr("width", width)
            .attr("xmlns", "http://www.w3.org/2000/svg");

        this.vector
            .append("style")
            .attr("id", "vector")
            .attr("type", "text/css");

        this.vertex = null;

        this.edge = this
            .vector
            .append("path")
            .attr("class", "line hidden")
            .attr("d", "M0,0L0,0");

        this.edges = this
            .vector
            .append("g")
            .selectAll(".edge");

        this.vertices = this
            .vector
            .append("g")
            .selectAll(".vertex");

        this.force = this.force();

        this.drag = this.drag();

        this.lastKeyDown = -1;

        d3
            .select("#clear-graph")
            .on("click", this.clear.bind(this));

        this.register();

        d3
            .select(window)
            .on("keydown", this.keyDown.bind(this))
            .on("keyup", this.keyUp.bind(this));

        $("#save").click(event => this.save(event.currentTarget));
        const progress = $("#progress");
        progress.change(() => {
            // See https://stackoverflow.com/questions/33855167/convert-data-file-to-blob
            const progress = document.getElementById("progress").files[0];
            const reader = new FileReader();
            reader.readAsText(progress);
            reader.addEventListener("load", event => this.load());
        });
        $("#load").click(() => progress.click());
    }

    addVertex(event) {
        // Prevents selecting text when dragging outside the canvas.
        event.preventDefault();
        if (event.button === 0) {
            const [latitude, longitude] = d3.pointer(event, event.currentTarget);
            const vertex = Vertex.Builder().withDegree(0).withOrdinate(latitude).withAbscissa(longitude).build();
            this.graph.vertices.push(vertex);
            this.draw();
            this.latex();
        }
    }

    alpha() {
        return 0.8;
    }

    clear() {
        this.graph.vertices.splice(0);
        this.graph.edges.splice(0);
        this.draw();
        this.latex();
    }

    colors() {
        return d3.schemeCategory10;
    }

    convert(edges) {
        const array = new Edges();
        edges.forEach(edge => {
            const builder = Edge.Builder();
            builder.withSource(edge.source.index);
            builder.withTarget(edge.target.index);
            const weight = edge.weight;
            if (weight) {
                builder.withWeight(weight);
            }
            array.push(builder.build());
        });
        return array;
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
                vertex.fx = null;
                vertex.fy = null;
            });
    }

    draw(vertices = this.graph.vertices, edges = this.graph.edges) {
        const alpha = this.alpha();
        this.force.nodes(vertices);
        this.force.force("link").links(edges);
        this.drawVertices(vertices);
        this.drawEdges(edges);
        // TODO Listeners should be called individually for vertices and edges.
        this.listen();
        this.force.alpha(alpha).restart();
    }

    drawEdge(key) {
        const edges = this
            .edges
            .enter()
            .append("g")
            .attr("class", "edge");

        edges
            .append("line");

        edges
            .append("title")
            .text(key);

        return edges;
    }

    drawEdges(value, key = edge => `v${edge.source.identifier}-v${edge.target.identifier}`) {
        this.edges = this.edges.data(value, key);
        this.edges.exit().remove();
        this.edges = this
            .drawEdge(key)
            .merge(this.edges);
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
            .attr("id", key)
            .style("fill", vertex => this.fill(vertex));

        vertices
            .append("title")
            .text(key);

        return vertices;
    }

    drawVertices(value, key = vertex => `v${vertex.identifier}`) {
        this.vertices = this.vertices.data(value, key);
        this.vertices.exit().remove();
        this.vertices = this
            .drawVertex(key)
            .merge(this.vertices);
    }

    endEdge(event, vertex) {
        if (!this.vertex || this.vertex === vertex) return;
        //return if link already exists
        for (const edge of this.graph.edges) {
            if ((edge.source === this.vertex && edge.target === vertex) || (edge.source === vertex && edge.target === this.vertex)) return;
        }
        const edge = Edge.Builder().withSource(this.vertex).withTarget(vertex).build();
        this.graph.edges.push(edge);
        // Drawing edges again to ensure they are d3.line() and not d3.path().
        this.draw();
        this.latex();
    }

    fill(vertex) {
        const colors = this.colors();
        const length = colors.length;
        return colors[vertex.identifier % length];
    }

    force(strength = -300, distance = 60) {
        const charge = d3
            .forceManyBody()
            .strength(strength)
            .distanceMax((width + height) / 2);

        const link = d3.forceLink().distance(distance);

        const x = d3.forceX(width / 2);

        const y = d3.forceY(height / 2);

        return d3
            .forceSimulation()
            .force("charge", charge)
            .force("link", link)
            .force("x", x)
            .force("y", y)
            .on("tick", this.tick.bind(this));
    }

    hideEdge() {
        this.edge.classed("hidden", true);
        this.vertex = null;
    }

    keyDown(event) {
        if (this.lastKeyDown !== -1) return;
        this.lastKeyDown = event.key;

        if (this.lastKeyDown === "Control") {
            console.debug("Control was pressed.");
            this.vertices.call(this.drag);
        }
    }

    keyUp(event) {
        this.lastKeyDown = -1;
        if (event.key === "Control") {
            console.debug("Control was released.");
            this.vertices.on("mousedown.drag", null);
        }
    }

    latex() {
        katex.render(this.message(), document.getElementById("latex"));
    }

    listen() {
        this
            .vertices
            .on("contextmenu", this.removeVertex.bind(this))
            .on("mousedown", this.startEdge.bind(this))
            .on("mouseup", this.endEdge.bind(this));

        this
            .edges
            .on("contextmenu", this.removeEdge.bind(this))
            .on("mousedown", event => event.stopPropagation());
    }

    load() {
        this.clear();
        const graph = JSON.parse(event.currentTarget.result);
        const edges = Object.assign(new Edges(), graph.edges);
        const vertices = Object.assign(new Vertices(), graph.vertices);
        this.graph = new Graph(vertices, edges);
        this.draw();
        this.latex();
    }

    message() {
        return String.raw``;
    }

    name() {
        throw new Error("You need to implement the name() method.");
    }

    parity() {
        // TODO
        // Either keep this method empty
        // Or...
        // You can modify the parent constructor.
    }

    radius() {
        return 10;
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

    removeEdge(event, edge) {
        this.graph.edges.remove(edge);
        this.draw();
        this.latex();
    }

    removeVertex(event, vertex) {
        // Allows the movement of vertices for macOS users.
        if (event.ctrlKey) return;

        this
            .graph
            .edges
            .filter(edge => edge.source.identifier === vertex.identifier || edge.target.identifier === vertex.identifier)
            .map(edge => this.graph.edges.remove(edge));

        this
            .graph
            .vertices
            .remove(vertex);

        this.draw();
        this.latex();
    }

    save(link) {
        const graph = this.graph;
        this.graph.edges = this.convert(this.graph.edges);
        const blob = new Blob([JSON.stringify(graph)], { type: "application/json" });
        link.href = URL.createObjectURL(blob);
        link.download = `${this.name()}-${Date.now()}.json`;
    }

    spread() {
        this
            .graph
            .vertices
            .forEach((vertex, index) => {
                vertex.y = (width / this.graph.order()) * index;
                if (index % 2 === 0) vertex.x = vertex.y;
                else vertex.x = width - vertex.y;
            });
    }

    startEdge(event, vertex) {
        // Prevents propagating event to other listeners.
        event.stopPropagation();
        // Prevents selecting text when dragging outside the canvas.
        event.preventDefault();
        if (event.ctrlKey || event.button !== 0) return;
        this.vertex = vertex;
        this
            .edge
            .classed("hidden", false)
            .attr("d", `M${this.vertex.x},${this.vertex.y}L${this.vertex.x},${this.vertex.y}`);
    }

    tick() {
        this
            .vertices
            .attr("transform", vertex => `translate(${vertex.x},${vertex.y})`);

        this
            .edges
            .selectAll("line")
            .attr("x1", edge => edge.source.x)
            .attr("y1", edge => edge.source.y)
            .attr("x2", edge => edge.target.x)
            .attr("y2", edge => edge.target.y);
    }

    updateEdge(event) {
        if (!this.vertex) return;
        const [latitude, longitude] = d3.pointer(event, event.currentTarget);
        this
            .edge
            .attr("d", `M${this.vertex.x},${this.vertex.y}L${latitude},${longitude}`);
    }
}
