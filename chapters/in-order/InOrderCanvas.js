import { BinarySearchTreeCanvas } from "../../library/BinarySearchTreeCanvas.js";

export class InOrderCanvas extends BinarySearchTreeCanvas {

    name() {
        return "in-order";
    }

    traversal(node = this.nodes.first(), nodes = []) {
        if (node.left) {
            this.traversal(this.nodes.at(node.left), nodes);
        }
        nodes.push(node.value + 1);
        if (node.right) {
            this.traversal(this.nodes.at(node.right), nodes);
        }
        return nodes;
    }
}
