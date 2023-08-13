import { DegreeSequenceCanvas } from "./DegreeSequenceCanvas.js";
import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const vertices = new Vertices(
    Vertex.Builder().withDegree(4).build(),
    Vertex.Builder().withDegree(4).build(),
    Vertex.Builder().withDegree(4).build(),
    Vertex.Builder().withDegree(4).build(),
    Vertex.Builder().withDegree(4).build(),
    Vertex.Builder().withDegree(4).build()
);

const edges = new Edges(
    Edge.Builder().withSource(0).withTarget(1).build(),
    Edge.Builder().withSource(0).withTarget(2).build(),
    Edge.Builder().withSource(0).withTarget(3).build(),
    Edge.Builder().withSource(0).withTarget(4).build(),
    Edge.Builder().withSource(1).withTarget(2).build(),
    Edge.Builder().withSource(2).withTarget(3).build(),
    Edge.Builder().withSource(3).withTarget(4).build(),
    Edge.Builder().withSource(4).withTarget(1).build(),
    Edge.Builder().withSource(5).withTarget(1).build(),
    Edge.Builder().withSource(5).withTarget(2).build(),
    Edge.Builder().withSource(5).withTarget(3).build(),
    Edge.Builder().withSource(5).withTarget(4).build()
);

const graph = new Graph(vertices, edges);
new DegreeSequenceCanvas(graph);
