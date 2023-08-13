import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { KruskalCanvas } from "./KruskalCanvas.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const ordinate = width / 2;
const abscissa = height / 2;
const spacer = 25;

const vertices = new Vertices(
    Vertex.Builder().withFixedAbscissa(abscissa).withFixedOrdinate(ordinate - (10 * spacer)).build(),
    Vertex.Builder().withFixedAbscissa(abscissa - (4 * spacer)).withFixedOrdinate(ordinate - (6 * spacer)).build(),
    Vertex.Builder().withFixedAbscissa(abscissa + (4 * spacer)).withFixedOrdinate(ordinate - (6 * spacer)).build(),
    Vertex.Builder().withFixedAbscissa(abscissa).withFixedOrdinate(ordinate - (3 * spacer)).build(),
    Vertex.Builder().withFixedAbscissa(abscissa - (4 * spacer)).withFixedOrdinate(ordinate).build(),
    Vertex.Builder().withFixedAbscissa(abscissa + (4 * spacer)).withFixedOrdinate(ordinate).build(),
    Vertex.Builder().withFixedAbscissa(abscissa - (4 * spacer)).withFixedOrdinate(ordinate + (6 * spacer)).build(),
    Vertex.Builder().withFixedAbscissa(abscissa + (4 * spacer)).withFixedOrdinate(ordinate + (6 * spacer)).build(),
    Vertex.Builder().withFixedAbscissa(abscissa).withFixedOrdinate(ordinate + (10 * spacer)).build()
);

const edges = new Edges(
    Edge.Builder().withSource(0).withTarget(1).withWeight(4).build(),
    Edge.Builder().withSource(0).withTarget(2).withWeight(8).build(),
    Edge.Builder().withSource(1).withTarget(2).withWeight(11).build(),
    Edge.Builder().withSource(1).withTarget(4).withWeight(8).build(),
    Edge.Builder().withSource(2).withTarget(3).withWeight(7).build(),
    Edge.Builder().withSource(2).withTarget(5).withWeight(1).build(),
    Edge.Builder().withSource(3).withTarget(4).withWeight(2).build(),
    Edge.Builder().withSource(3).withTarget(5).withWeight(6).build(),
    Edge.Builder().withSource(4).withTarget(6).withWeight(7).build(),
    Edge.Builder().withSource(4).withTarget(7).withWeight(4).build(),
    Edge.Builder().withSource(5).withTarget(7).withWeight(2).build(),
    Edge.Builder().withSource(6).withTarget(7).withWeight(14).build(),
    Edge.Builder().withSource(6).withTarget(8).withWeight(9).build(),
    Edge.Builder().withSource(7).withTarget(8).withWeight(10).build()
);

const graph = new Graph(vertices, edges);
new KruskalCanvas(graph);
