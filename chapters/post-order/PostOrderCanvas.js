import { BinarySearchTreeCanvas } from "../../library/BinarySearchTreeCanvas.js";

export class PostOrderCanvas extends BinarySearchTreeCanvas {

    name() {
        return "post-order";
    }

    traversal(node = this.nodes.first(), nodes = []) {
        if (node.left) {
            this.traversal(this.nodes.at(node.left), nodes);
        }
        if (node.right) {
            this.traversal(this.nodes.at(node.right), nodes);
        }
        nodes.push(node.value + 1);
        return nodes;
    }
}
