import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { HavelHakimiCanvas } from "./HavelHakimiCanvas.js";
import { Problem } from "../../library/Problem.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const problems = [
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(1).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(6).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(6).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(1).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(1).build(),
                    Vertex.Builder().withDegree(1).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(8).build(),
                    Vertex.Builder().withDegree(6).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(1).build(),
                    Vertex.Builder().withDegree(1).build(),
                    Vertex.Builder().withDegree(1).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(8).build(),
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(6).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(1).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(9).build(),
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(6).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(2).build(),
                    Vertex.Builder().withDegree(1).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(8).build(),
                    Vertex.Builder().withDegree(8).build(),
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(6).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(3).build(),
                    Vertex.Builder().withDegree(1).build()
                ),
                new Edges()
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withDegree(8).build(),
                    Vertex.Builder().withDegree(8).build(),
                    Vertex.Builder().withDegree(8).build(),
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(7).build(),
                    Vertex.Builder().withDegree(6).build(),
                    Vertex.Builder().withDegree(6).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(5).build(),
                    Vertex.Builder().withDegree(4).build(),
                    Vertex.Builder().withDegree(4).build()
                ),
                new Edges()
            )
        )
        .build()
];

new HavelHakimiCanvas(problems);
