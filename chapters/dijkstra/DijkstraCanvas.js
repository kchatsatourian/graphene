import { GreedyCanvas } from "../../library/GreedyCanvas.js";
import { PriorityQueue } from "../../library/PriorityQueue.js";

export class DijkstraCanvas extends GreedyCanvas {

    message() {
        d3
            .selectAll("line")
            .transition()
            .style("stroke", "#888");

        const edges = [];
        for (let index = 0; index < this.path.length - 1; index++) {
            const source = this.path[index];
            const target = this.path[index + 1];
            // TODO This is a hack to get the edge.
            let edge = this.graph.edges.find(source, target);
            if (edge === undefined || edge === null) {
                edge = this.graph.edges.find(target, source);
            }
            edges.push(edge);
        }

        d3
            .selectAll("line")
            .filter(edge => edges.includes(edge))
            .transition()
            .duration(1000)
            .delay((edge, index) => index * 1000)
            .style("stroke", "red");

        const distance = this.graph.vertices.last().distance;
        const path = this.path.map(vertex => `v_{${vertex.identifier}}`);
        return String.raw`Distance=${distance}\\Path=\{${path}\}`;
    }

    name() {
        return "dijkstra";
    }

    removeVertex(event, vertex) {
        this.graph.vertices.forEach(element => element.previous = null);
        super.removeVertex(event, vertex);
    }

    validate() {
        for (const vertex of this.graph.vertices) {
            vertex.distance = Infinity;
            vertex.visited = false;
        }

        const start = this.graph.vertices.first();
        const end = this.graph.vertices.last();

        start.distance = 0;

        const queue = new PriorityQueue();
        queue.enqueue(start, 0);

        while (!queue.isEmpty()) {
            const vertex = queue.dequeue().element;
            vertex.visited = true;

            if (vertex === end) {
                break;
            }

            for (const edge of this.graph.edges) {
                if (edge.source !== vertex && edge.target !== vertex) {
                    continue;
                }
                const neighbor = edge.source === vertex ? edge.target : edge.source;
                if (neighbor.visited) {
                    continue;
                }
                const distance = vertex.distance + edge.weight;
                if (distance < neighbor.distance) {
                    neighbor.distance = distance;
                    neighbor.previous = vertex;
                    queue.enqueue(neighbor, distance);
                }
            }
        }

        this.path = [];
        if (end.visited) {
            let vertex = end;
            while (vertex !== null && vertex !== undefined) {
                this.path.unshift(vertex);
                vertex = vertex.previous;
            }
        }

        this.latex();
    }
}
