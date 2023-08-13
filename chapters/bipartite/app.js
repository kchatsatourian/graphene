import { BipartiteCanvas } from "./BipartiteCanvas.js";
import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const vertices = new Vertices(
    Vertex.Builder().withDegree(2).build(),
    Vertex.Builder().withDegree(2).build(),
    Vertex.Builder().withDegree(1).build(),
    Vertex.Builder().withDegree(2).build(),
    Vertex.Builder().withDegree(1).build()
);

const edges = new Edges(
    Edge.Builder().withSource(0).withTarget(3).build(),
    Edge.Builder().withSource(0).withTarget(4).build(),
    Edge.Builder().withSource(1).withTarget(2).build(),
    Edge.Builder().withSource(1).withTarget(3).build()
);

const graph = new Graph(vertices, edges);
new BipartiteCanvas(graph);
