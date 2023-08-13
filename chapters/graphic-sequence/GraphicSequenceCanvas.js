import { DegreeSequenceCanvas } from "../degree-sequence/DegreeSequenceCanvas.js";
import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

export class GraphicSequenceCanvas extends DegreeSequenceCanvas {

    constructor(graph) {
        super(graph);

        const solutions = [
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(1).build(),
                    Vertex.Builder().withDegree(1).build(),
                    Vertex.Builder().withDegree(1).build(),
                    Vertex.Builder().withDegree(1).build(),
                    Vertex.Builder().withDegree(1).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build()
                )
            ),
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(0).build()
                )
            ),
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(0).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(1).withTarget(4).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(3).withTarget(4).build()
                )
            ),
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(1).withTarget(4).build()
                )
            ),
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(4).withTarget(5).build()
                )
            )
        ];

        d3
            .selectAll(".graph-event-link")
            .on("click", event => this.solve(solutions[event.currentTarget.id.substring(4)]));
    }

    name() {
        return "graphic-sequence";
    }

    // TODO Recreate this object instead.
    solve(graph) {
        this.clear();

        graph
            .vertices
            .forEach(vertex => this.graph.vertices.push(vertex));

        graph
            .edges
            .forEach(edge => this.graph.edges.push(edge));

        this.spread();
        this.force.restart();

        this.draw();
        this.latex();
    }
}
