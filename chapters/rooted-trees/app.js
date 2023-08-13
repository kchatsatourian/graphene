import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { RootedTreesCanvas } from "./RootedTreesCanvas.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

// TODO Radius is not available until the canvas is drawn.
const radius = 10;

const vertices = new Vertices(
    Vertex.Builder().withColor(0).withFixedAbscissa(radius + 5).withFixedOrdinate(width / 2).build(),
    Vertex.Builder().withColor(1).build(),
    Vertex.Builder().withColor(1).build(),
    Vertex.Builder().withColor(2).build(),
    Vertex.Builder().withColor(2).build(),
    Vertex.Builder().withColor(2).build(),
    Vertex.Builder().withColor(2).build()
);

const edges = new Edges(
    Edge.Builder().withSource(0).withTarget(1).build(),
    Edge.Builder().withSource(0).withTarget(2).build(),
    Edge.Builder().withSource(1).withTarget(3).build(),
    Edge.Builder().withSource(2).withTarget(4).build(),
    Edge.Builder().withSource(2).withTarget(5).build(),
    Edge.Builder().withSource(2).withTarget(6).build()
);

const graph = new Graph(vertices, edges);
new RootedTreesCanvas(graph);
