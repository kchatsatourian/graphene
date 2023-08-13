import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { OpenClosedWalks } from "./OpenClosedWalks.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const vertices = new Vertices(
    Vertex.Builder().withDegree(5).withOrdinate(262).withAbscissa(246).build(),
    Vertex.Builder().withDegree(5).withOrdinate(359).withAbscissa(314).build(),
    Vertex.Builder().withDegree(5).withOrdinate(362).withAbscissa(252).build(),
    Vertex.Builder().withDegree(5).withOrdinate(324).withAbscissa(168).build(),
    Vertex.Builder().withDegree(5).withOrdinate(272).withAbscissa(133).build(),
    Vertex.Builder().withDegree(5).withOrdinate(319).withAbscissa(222).build(),
    Vertex.Builder().withDegree(5).withOrdinate(462).withAbscissa(265).build(),
    Vertex.Builder().withDegree(5).withOrdinate(415).withAbscissa(177).build(),
    Vertex.Builder().withDegree(5).withOrdinate(378).withAbscissa(85).build(),
    Vertex.Builder().withDegree(5).withOrdinate(371).withAbscissa(146).build(),
    Vertex.Builder().withDegree(5).withOrdinate(411).withAbscissa(230).build(),
    Vertex.Builder().withDegree(5).withOrdinate(472).withAbscissa(150).build()
);

const edges = new Edges(
    Edge.Builder().withSource(0).withTarget(1).build(),
    Edge.Builder().withSource(0).withTarget(2).build(),
    Edge.Builder().withSource(0).withTarget(3).build(),
    Edge.Builder().withSource(0).withTarget(4).build(),
    Edge.Builder().withSource(0).withTarget(5).build(),
    Edge.Builder().withSource(1).withTarget(2).build(),
    Edge.Builder().withSource(2).withTarget(3).build(),
    Edge.Builder().withSource(3).withTarget(4).build(),
    Edge.Builder().withSource(4).withTarget(5).build(),
    Edge.Builder().withSource(5).withTarget(1).build(),
    Edge.Builder().withSource(6).withTarget(1).build(),
    Edge.Builder().withSource(6).withTarget(2).build(),
    Edge.Builder().withSource(7).withTarget(2).build(),
    Edge.Builder().withSource(7).withTarget(3).build(),
    Edge.Builder().withSource(8).withTarget(3).build(),
    Edge.Builder().withSource(8).withTarget(4).build(),
    Edge.Builder().withSource(9).withTarget(4).build(),
    Edge.Builder().withSource(9).withTarget(5).build(),
    Edge.Builder().withSource(10).withTarget(5).build(),
    Edge.Builder().withSource(10).withTarget(1).build(),
    Edge.Builder().withSource(6).withTarget(7).build(),
    Edge.Builder().withSource(7).withTarget(8).build(),
    Edge.Builder().withSource(8).withTarget(9).build(),
    Edge.Builder().withSource(9).withTarget(10).build(),
    Edge.Builder().withSource(10).withTarget(6).build(),
    Edge.Builder().withSource(11).withTarget(6).build(),
    Edge.Builder().withSource(11).withTarget(7).build(),
    Edge.Builder().withSource(11).withTarget(8).build(),
    Edge.Builder().withSource(11).withTarget(9).build(),
    Edge.Builder().withSource(11).withTarget(10).build()
);

const graph = new Graph(vertices, edges);
new OpenClosedWalks(graph);
