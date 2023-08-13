import { Edge } from "./Edge.js";
import { Edges } from "./Edges.js";
import { Graph } from "./Graph.js";
import { Vertex } from "./Vertex.js";
import { Vertices } from "./Vertices.js";

export class Utilities {

    static clone(graph) {
        const vertices = new Vertices();
        for (const vertex of graph.vertices) {
            vertices
                .push(
                    Vertex
                        .Builder()
                        .withAbscissa(vertex.y)
                        .withColor(vertex.color)
                        .withDegree(vertex.degree)
                        .withOrdinate(vertex.x)
                        .withParity(vertex.parity)
                        .build()
                );
        }

        const edges = new Edges();
        for (const edge of graph.edges) {
            edges
                .push(
                    Edge
                        .Builder()
                        .withSource(edge.source)
                        .withTarget(edge.target)
                        .withWeight(edge.weight)
                        .build()
                );
        }

        return new Graph(vertices, edges);
    }
}
