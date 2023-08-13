import { Node } from "../../library/Node.js";
import { Nodes } from "../../library/Nodes.js";
import { PreOrderCanvas } from "./PreOrderCanvas.js";

const nodes = new Nodes(
    Node.Builder().withLeft(1).withRight(2).withValue(0).build(),
    Node.Builder().withLeft(3).withRight(4).withValue(1).build(),
    Node.Builder().withLeft(5).withRight(6).withValue(2).build(),
    Node.Builder().withValue(3).build(),
    Node.Builder().withValue(4).build(),
    Node.Builder().withValue(5).build(),
    Node.Builder().withValue(6).build()
);

new PreOrderCanvas(nodes);
