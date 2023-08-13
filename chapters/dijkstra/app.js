import { DijkstraCanvas } from "./DijkstraCanvas.js";
import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const ordinate = width / 2;
const abscissa = height / 2;

const vertices = new Vertices(
    Vertex.Builder().withFixedAbscissa(abscissa + 100).withFixedOrdinate(ordinate - 150).build(),
    Vertex.Builder().withFixedAbscissa(abscissa).withFixedOrdinate(ordinate - 50).build(),
    Vertex.Builder().withFixedAbscissa(abscissa + 100).withFixedOrdinate(ordinate - 50).build(),
    Vertex.Builder().withFixedAbscissa(abscissa - 100).withFixedOrdinate(ordinate + 50).build(),
    Vertex.Builder().withFixedAbscissa(abscissa).withFixedOrdinate(ordinate + 50).build(),
    Vertex.Builder().withFixedAbscissa(abscissa + 100).withFixedOrdinate(ordinate + 50).build(),
    Vertex.Builder().withFixedAbscissa(abscissa - 100).withFixedOrdinate(ordinate + 150).build(),
    Vertex.Builder().withFixedAbscissa(abscissa).withFixedOrdinate(ordinate + 150).build(),
    Vertex.Builder().withFixedAbscissa(abscissa + 100).withFixedOrdinate(ordinate + 150).build()
);

const edges = new Edges(
    Edge.Builder().withSource(0).withTarget(1).withWeight(5).build(),
    Edge.Builder().withSource(0).withTarget(2).withWeight(1).build(),
    Edge.Builder().withSource(1).withTarget(2).withWeight(2).build(),
    Edge.Builder().withSource(1).withTarget(3).withWeight(3).build(),
    Edge.Builder().withSource(2).withTarget(5).withWeight(9).build(),
    Edge.Builder().withSource(3).withTarget(4).withWeight(1).build(),
    Edge.Builder().withSource(3).withTarget(6).withWeight(6).build(),
    Edge.Builder().withSource(4).withTarget(5).withWeight(2).build(),
    Edge.Builder().withSource(5).withTarget(8).withWeight(2).build(),
    Edge.Builder().withSource(6).withTarget(7).withWeight(5).build(),
    Edge.Builder().withSource(7).withTarget(8).withWeight(1).build()
);

const graph = new Graph(vertices, edges);
new DijkstraCanvas(graph);
