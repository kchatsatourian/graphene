import { ChromaticNumberCanvas } from "./ChromaticNumberCanvas.js";
import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { Problem } from "../../library/Problem.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const ordinate = width / 2;
const abscissa = height / 2;

const problems = [
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(1).withOrdinate(ordinate + 100).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(1).withOrdinate(ordinate + 100).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(1).withOrdinate(ordinate - 100).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(1).withOrdinate(ordinate - 100).withAbscissa(abscissa).build()
                ),
                new Edges()
            )
        )
        .withMessage(String.raw`\text{Empty graph: }\hspace{5px} \chi(G)=1`)
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(3).withOrdinate(50).withAbscissa(0).build(),
                    Vertex.Builder().withColor(3).withOrdinate(0).withAbscissa(50).build(),
                    Vertex.Builder().withColor(2).withOrdinate(ordinate - 50).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(2).withOrdinate(ordinate - 50).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(2).withOrdinate(ordinate + 50).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(2).withOrdinate(ordinate + 50).withAbscissa(abscissa).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(1).withTarget(4).build(),
                    Edge.Builder().withSource(1).withTarget(5).build()
                )
            )
        )
        .withMessage(String.raw`\text{Non-empty Bipartite Graph: }\hspace{5px} \chi(K_{2,4})=2`)
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(1).withOrdinate(ordinate).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(4).withOrdinate(0).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(4).withOrdinate(0).withAbscissa(0).build(),
                    Vertex.Builder().withColor(4).withOrdinate(ordinate).withAbscissa(0).build(),
                    Vertex.Builder().withColor(4).withOrdinate(width).withAbscissa(0).build(),
                    Vertex.Builder().withColor(4).withOrdinate(width).withAbscissa(abscissa).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build()
                )
            )
        )
        .withMessage(String.raw`\text{Non-empty Star Graph: }\hspace{5px} \chi(S_6)=2`)
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(4).withOrdinate(0).withAbscissa(0).build(),
                    Vertex.Builder().withColor(2).withOrdinate(0).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(4).withOrdinate(0).withAbscissa(height).build(),
                    Vertex.Builder().withColor(2).withOrdinate(width).withAbscissa(height).build(),
                    Vertex.Builder().withColor(4).withOrdinate(width).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(2).withOrdinate(width).withAbscissa(0).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(0).build()
                )
            )
        )
        .withMessage(String.raw`\text{Cycle Graph of Even Order: }\hspace{5px} \chi(C_6)=2`)
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(5).withOrdinate(ordinate).withAbscissa(0).build(),
                    Vertex.Builder().withColor(6).withOrdinate(width).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(5).withOrdinate(width).withAbscissa(height).build(),
                    Vertex.Builder().withColor(6).withOrdinate(0).withAbscissa(height).build(),
                    Vertex.Builder().withColor(7).withOrdinate(0).withAbscissa(abscissa).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(0).build()
                )
            )
        )
        .withMessage(String.raw`\text{Cycle Graph of Odd Order: }\hspace{5px} \chi(C_5)=3`)
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(6).withOrdinate(ordinate).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(8).withOrdinate(ordinate).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(1).withOrdinate(ordinate + 190).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(4).withOrdinate(ordinate + 118).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(8).withOrdinate(ordinate - 118).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(4).withOrdinate(ordinate - 190).withAbscissa(abscissa).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(1).build()
                )
            )
        )
        .withMessage(String.raw`\text{Wheel Graph of Even Order: }\hspace{5px} \chi(W_6)=4`)
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(5).withOrdinate(ordinate).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(6).withOrdinate(ordinate + 200).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(3).withOrdinate(ordinate + 100).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(6).withOrdinate(ordinate - 100).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(3).withOrdinate(ordinate - 200).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(6).withOrdinate(ordinate - 100).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(3).withOrdinate(ordinate + 100).withAbscissa(abscissa).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(0).withTarget(6).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(6).build(),
                    Edge.Builder().withSource(6).withTarget(1).build()
                )
            )
        )
        .withMessage(String.raw`\text{Wheel Graph of Odd Order: }\hspace{5px} \chi(W_7)=3`)
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(1).withOrdinate(0).withAbscissa(0).build(),
                    Vertex.Builder().withColor(2).withOrdinate(width).withAbscissa(0).build(),
                    Vertex.Builder().withColor(3).withOrdinate(width).withAbscissa(abscissa).build(),
                    Vertex.Builder().withColor(4).withOrdinate(width).withAbscissa(height).build(),
                    Vertex.Builder().withColor(5).withOrdinate(0).withAbscissa(height).build(),
                    Vertex.Builder().withColor(6).withOrdinate(0).withAbscissa(abscissa).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(1).withTarget(4).build(),
                    Edge.Builder().withSource(1).withTarget(5).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(2).withTarget(5).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(3).withTarget(5).build(),
                    Edge.Builder().withSource(4).withTarget(5).build()
                )
            )
        )
        .withMessage(String.raw`\text{Complete Graph: }\hspace{5px} \chi(K_6)=6`)
        .build()
];

new ChromaticNumberCanvas(problems);
