import { Queue } from "./Queue.js";

export class PriorityQueue extends Queue {

    enqueue(element, priority) {
        const object = {
            element,
            priority
        };
        this.push(object);
        this.sort();
    }

    sort() {
        super.sort((previous, next) => previous.priority - next.priority);
    }
}
