import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { TreesCanvas } from "./TreesCanvas.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const vertices = new Vertices(
    Vertex.Builder().build(),
    Vertex.Builder().build(),
    Vertex.Builder().build(),
    Vertex.Builder().build(),
    Vertex.Builder().build(),
    Vertex.Builder().build(),
    Vertex.Builder().build()
);

const edges = new Edges(
    Edge.Builder().withSource(0).withTarget(1).build(),
    Edge.Builder().withSource(0).withTarget(2).build(),
    Edge.Builder().withSource(1).withTarget(3).build(),
    Edge.Builder().withSource(1).withTarget(4).build(),
    Edge.Builder().withSource(2).withTarget(5).build(),
    Edge.Builder().withSource(3).withTarget(6).build()
);

const graph = new Graph(vertices, edges);
new TreesCanvas(graph);
