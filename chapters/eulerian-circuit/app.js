import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { EulerianCircuitCanvas } from "./EulerianCircuitCanvas.js";
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
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(0).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(4).withOrdinate(378).withAbscissa(275).build(),
                    Vertex.Builder().withDegree(2).withOrdinate(249).withAbscissa(295).build(),
                    Vertex.Builder().withDegree(4).withOrdinate(307).withAbscissa(149).build(),
                    Vertex.Builder().withDegree(2).withOrdinate(374).withAbscissa(47).build(),
                    Vertex.Builder().withDegree(4).withOrdinate(443).withAbscissa(163).build(),
                    Vertex.Builder().withDegree(2).withOrdinate(492).withAbscissa(268).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(0).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
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
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(0).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(0).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(1).build()
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
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(3).withTarget(4).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(4).withOrdinate(246).withAbscissa(240).build(),
                    Vertex.Builder().withDegree(4).withOrdinate(468).withAbscissa(216).build(),
                    Vertex.Builder().withDegree(4).withOrdinate(398).withAbscissa(299).build(),
                    Vertex.Builder().withDegree(4).withOrdinate(302).withAbscissa(308).build(),
                    Vertex.Builder().withDegree(4).withOrdinate(361).withAbscissa(189).build(),
                    Vertex.Builder().withDegree(2).withOrdinate(343).withAbscissa(128).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(1).build(),
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
            )
        )
        .build()
];

new EulerianCircuitCanvas(problems);
