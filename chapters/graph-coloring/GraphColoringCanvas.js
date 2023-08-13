import { Canvas } from "../../library/Canvas.js";
import { Vertex } from "../../library/Vertex.js";

export class GraphColoringCanvas extends Canvas {

    constructor(graph) {
        super(graph);
        this.draw();
        this.latex();
    }

    addVertex(event) {
        if (event.button === 0) {
            const [latitude, longitude] = d3.pointer(event, event.currentTarget);
            const order = this.graph.order();
            const vertex = Vertex.Builder().withColor(order % 10).withOrdinate(latitude).withAbscissa(longitude).build();
            this.graph.vertices.push(vertex);
            this.draw();
            this.latex();
        }
    }

    alpha() {
        return 0.3;
    }

    color(event) {
        if (event.ctrlKey || event.button !== 0) return;

        const colors = this.colors();
        const length = colors.length - 1;

        d3
            .select(event.currentTarget)
            .style("fill", vertex => {
                vertex.color = (vertex.color + 1) % length;
                return colors[vertex.color];
            });

        this.latex();
    }

    fill(vertex) {
        const colors = this.colors();
        return colors[vertex.color];
    }

    force(strength = -300, distance = 100) {
        return super.force(strength, distance);
    }

    listen() {
        this
            .vertices
            .on("contextmenu", this.removeVertex.bind(this))
            .on("mousedown", this.startEdge.bind(this))
            .on("mouseup", this.endEdge.bind(this));

        this
            .vertices
            .selectAll("circle")
            .on("click", this.color.bind(this));

        this
            .edges
            .on("contextmenu", this.removeEdge.bind(this))
            .on("mousedown", event => event.stopPropagation());
    }

    message() {
        if (this.graph.vertices.length === 0) {
            return String.raw`\text{Draw something.}`;
        } else if (this.validate()) {
            return String.raw`\text{The graph is properly colored.}`;
        }

        return String.raw`\text{Not properly colored. Watch out for those red edges!}`;
    }

    name() {
        return "graph-coloring";
    }

    validate() {
        let flag = true;

        for (const node of this.edges.nodes()) {
            const edge = d3.select(node);
            const datum = edge.datum();
            if (datum.source.color === datum.target.color) {
                edge.classed("same-color", true);
                flag = false;
            } else {
                edge.classed("same-color", false);
            }
        }

        return flag;
    }
}
