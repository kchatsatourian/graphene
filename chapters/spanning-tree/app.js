import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { Problem } from "../../library/Problem.js";
import { SpanningTreeCanvas } from "./SpanningTreeCanvas.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const problems = [
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withOrdinate(239).withAbscissa(211).build(),
                    Vertex.Builder().withOrdinate(222).withAbscissa(129).build(),
                    Vertex.Builder().withOrdinate(309).withAbscissa(257).build(),
                    Vertex.Builder().withOrdinate(335).withAbscissa(146).build(),
                    Vertex.Builder().withOrdinate(352).withAbscissa(229).build(),
                    Vertex.Builder().withOrdinate(265).withAbscissa(100).build(),
                    Vertex.Builder().withOrdinate(287).withAbscissa(179).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(3).withTarget(5).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(1).withTarget(6).build(),
                    Edge.Builder().withSource(2).withTarget(6).build(),
                    Edge.Builder().withSource(4).withTarget(6).build(),
                    Edge.Builder().withSource(5).withTarget(6).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withOrdinate(384).withAbscissa(197).build(),
                    Vertex.Builder().withOrdinate(323).withAbscissa(98).build(),
                    Vertex.Builder().withOrdinate(200).withAbscissa(127).build(),
                    Vertex.Builder().withOrdinate(278).withAbscissa(197).build(),
                    Vertex.Builder().withOrdinate(310).withAbscissa(268).build(),
                    Vertex.Builder().withOrdinate(329).withAbscissa(177).build(),
                    Vertex.Builder().withOrdinate(257).withAbscissa(135).build(),
                    Vertex.Builder().withOrdinate(209).withAbscissa(226).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(0).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(6).build(),
                    Edge.Builder().withSource(6).withTarget(7).build(),
                    Edge.Builder().withSource(7).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(1).withTarget(5).build(),
                    Edge.Builder().withSource(1).withTarget(6).build(),
                    Edge.Builder().withSource(2).withTarget(6).build(),
                    Edge.Builder().withSource(2).withTarget(7).build(),
                    Edge.Builder().withSource(3).withTarget(7).build(),
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
                    Vertex.Builder().withOrdinate(314).withAbscissa(62).build(),
                    Vertex.Builder().withOrdinate(200).withAbscissa(81).build(),
                    Vertex.Builder().withOrdinate(163).withAbscissa(189).build(),
                    Vertex.Builder().withOrdinate(243).withAbscissa(280).build(),
                    Vertex.Builder().withOrdinate(355).withAbscissa(258).build(),
                    Vertex.Builder().withOrdinate(389).withAbscissa(147).build(),
                    Vertex.Builder().withOrdinate(265).withAbscissa(123).build(),
                    Vertex.Builder().withOrdinate(237).withAbscissa(205).build(),
                    Vertex.Builder().withOrdinate(322).withAbscissa(188).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(0).build(),
                    Edge.Builder().withSource(0).withTarget(6).build(),
                    Edge.Builder().withSource(1).withTarget(6).build(),
                    Edge.Builder().withSource(2).withTarget(7).build(),
                    Edge.Builder().withSource(3).withTarget(7).build(),
                    Edge.Builder().withSource(4).withTarget(8).build(),
                    Edge.Builder().withSource(5).withTarget(8).build(),
                    Edge.Builder().withSource(6).withTarget(7).build(),
                    Edge.Builder().withSource(7).withTarget(8).build(),
                    Edge.Builder().withSource(8).withTarget(6).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withOrdinate(319).withAbscissa(324).build(),
                    Vertex.Builder().withOrdinate(355).withAbscissa(387).build(),
                    Vertex.Builder().withOrdinate(390).withAbscissa(324).build(),
                    Vertex.Builder().withOrdinate(427).withAbscissa(388).build(),
                    Vertex.Builder().withOrdinate(465).withAbscissa(324).build(),
                    Vertex.Builder().withOrdinate(425).withAbscissa(260).build(),
                    Vertex.Builder().withOrdinate(499).withAbscissa(259).build(),
                    Vertex.Builder().withOrdinate(540).withAbscissa(321).build(),
                    Vertex.Builder().withOrdinate(571).withAbscissa(256).build(),
                    Vertex.Builder().withOrdinate(532).withAbscissa(195).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(2).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(6).build(),
                    Edge.Builder().withSource(4).withTarget(6).build(),
                    Edge.Builder().withSource(6).withTarget(7).build(),
                    Edge.Builder().withSource(4).withTarget(7).build(),
                    Edge.Builder().withSource(6).withTarget(8).build(),
                    Edge.Builder().withSource(7).withTarget(8).build(),
                    Edge.Builder().withSource(6).withTarget(9).build(),
                    Edge.Builder().withSource(8).withTarget(9).build()
                )
            )
        )
        .build()
];

new SpanningTreeCanvas(problems);
