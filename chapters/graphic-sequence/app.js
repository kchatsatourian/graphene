import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { GraphicSequenceCanvas } from "./GraphicSequenceCanvas.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const vertices = new Vertices(
    Vertex.Builder().withDegree(3).build(),
    Vertex.Builder().withDegree(3).build(),
    Vertex.Builder().withDegree(2).build(),
    Vertex.Builder().withDegree(1).build(),
    Vertex.Builder().withDegree(1).build(),
    Vertex.Builder().withDegree(0).build()
);

const edges = new Edges(
    Edge.Builder().withSource(0).withTarget(1).build(),
    Edge.Builder().withSource(0).withTarget(2).build(),
    Edge.Builder().withSource(0).withTarget(3).build(),
    Edge.Builder().withSource(1).withTarget(2).build(),
    Edge.Builder().withSource(1).withTarget(4).build()
);

const graph = new Graph(vertices, edges);
new GraphicSequenceCanvas(graph);
