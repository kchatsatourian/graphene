import { Edges } from "../../library/Edges.js";
import { Edge } from "../../library/Edge.js";
import { Graph } from "../../library/Graph.js";
import { PigeonholeCanvas } from "./PigeonholeCanvas.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const vertices = new Vertices(
    Vertex.Builder().withDegree(3).build(),
    Vertex.Builder().withDegree(3).build(),
    Vertex.Builder().withDegree(3).build(),
    Vertex.Builder().withDegree(3).build(),
    Vertex.Builder().withDegree(3).build(),
    Vertex.Builder().withDegree(3).build(),
    Vertex.Builder().withDegree(4).build(),
    Vertex.Builder().withDegree(4).build(),
    Vertex.Builder().withDegree(4).build()
);

const edges = new Edges(
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
);

const graph = new Graph(vertices, edges);
new PigeonholeCanvas(graph);
