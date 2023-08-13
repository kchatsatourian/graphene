import { Canvas } from "./Canvas.js";
import { Edge } from "./Edge.js";

export class MinimumSpanningTreeCanvas extends Canvas {

    constructor(graph) {
        super(graph);
        this.draw();
        this.latex();
    }

    drawEdge(key) {
        const edges = super.drawEdge(key);

        const weights = edges
            .append("g")
            .attr("class", "weight")
            .attr("transform", edge => `translate(${(edge.source.x + edge.target.x) / 2},${(edge.source.y + edge.target.y) / 2})`);

        weights
            .append("circle")
            .attr("r", this.radius)
            .style("fill", getComputedStyle(document.getElementById("application-container")).getPropertyValue("background-color"));

        weights
            .append("title")
            .text(edge => edge.weight);

        weights
            .append("text")
            .attr("y", 4)
            .text(edge => edge.weight);

        return edges;
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

    endEdge(event, vertex) {
        if (!this.vertex || this.vertex === vertex) return;
        //return if link already exists
        for (const edge of this.graph.edges) {
            if ((edge.source === this.vertex && edge.target === vertex) || (edge.source === vertex && edge.target === this.vertex)) return;
        }
        const edge = Edge.Builder().withSource(this.vertex).withTarget(vertex).withWeight(1).build();
        this.graph.edges.push(edge);
        // Drawing edges again to ensure they are d3.line() and not d3.path().
        this.draw();
        this.latex();
    }

    force(strength = -300, distance = 100) {
        return super.force(strength, distance);
    }

    listen() {
        super.listen();

        this
            .edges
            .selectAll(".weight")
            .on("click", this.updateWeight.bind(this));
    }

    message() {
        d3
            .selectAll("line")
            .transition()
            .style("stroke", "#888");

        const edges = this.traversal();

        d3
            .selectAll("line")
            .filter(edge => edges.includes(edge))
            .transition()
            .duration(1000)
            .delay((edge, index) => index * 1000)
            .style("stroke", "red");

        const cost = edges.reduce((cost, edge) => cost += edge.weight, 0);

        const tree = edges
            .map(edge => `v_{${edge.source.identifier}}v_{${edge.target.identifier}}`)
            .join(", ");

        return String.raw`Cost=${cost}\\Tree=\{${tree}\}`;
    }

    radius() {
        return 12;
    }

    tick() {
        super.tick();

        this
            .edges
            .selectAll(".weight")
            .attr("transform", edge => `translate(${(edge.source.x + edge.target.x) / 2},${(edge.source.y + edge.target.y) / 2})`);
    }

    traversal() {
        throw new Error("You need to implement the traversal() method.");
    }

    updateWeight(event) {
        const edge = d3.select(event.currentTarget).datum();

        const modal = `
            <div class="fade modal" id="weight-modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="fs-5 modal-title" id="weight-modal-label">Update weight</h1>
                            <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label class="col-form-label" for="weight">Weight:</label>
                                    <input class="form-control" id="weight" type="number" value="${edge.weight}">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" id="weight-modal-button">Update</button>
                        </div>
                    </div>
                </div>
            </div>`;

        const weights = this
            .edges
            .selectAll(".weight");

        const self = this;

        function click(event, edge) {
            edge.weight = parseInt($("#weight").val());

            $("#weight-modal").modal("hide");

            weights
                .selectAll("title")
                .text(edge => edge.weight);

            weights
                .selectAll("text")
                .text(edge => edge.weight);

            self.latex();
        }

        $("body").append(modal);
        $("#weight-modal").modal("show");
        $("#weight-modal-button").on("click", event => click(event, edge));
        $("#weight-modal").on("hidden.bs.modal", event => $("#weight-modal").remove());
    }
}
