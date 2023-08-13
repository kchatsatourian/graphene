import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { EulerianTrailCanvas } from "./EulerianTrailCanvas.js";
import { Graph } from "../../library/Graph.js";
import { Problem } from "../../library/Problem.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const problems = [
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(1).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(1).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(0).build(),
                    Edge.Builder().withSource(0).withTarget(2).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(0).withTarget(6).build(),
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(0).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build()
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
                    Edge.Builder().withSource(2).withTarget(4).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(6).build(),
                    Edge.Builder().withSource(6).withTarget(0).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(6).build(),
                    Edge.Builder().withSource(6).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(5).withTarget(0).build()
                )
            )
        )
        .build()
];

new EulerianTrailCanvas(problems);
