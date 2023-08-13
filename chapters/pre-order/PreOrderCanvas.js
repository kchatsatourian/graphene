import { BinarySearchTreeCanvas } from "../../library/BinarySearchTreeCanvas.js";

export class PreOrderCanvas extends BinarySearchTreeCanvas {

    name() {
        return "pre-order";
    }

    traversal(node = this.nodes.first(), nodes = []) {
        nodes.push(node.value + 1);
        if (node.left) {
            this.traversal(this.nodes.at(node.left), nodes);
        }
        if (node.right) {
            this.traversal(this.nodes.at(node.right), nodes);
        }
        return nodes;
    }
}
