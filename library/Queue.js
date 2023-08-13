export class Queue extends Array {

    dequeue() {
        if (this.isEmpty()) {
            return new Error();
        }
        return this.shift();
    }

    enqueue(element) {
        this.push(element);
    }

    front() {
        if (this.isEmpty()) {
            return new Error();
        }
        return this.at(0);
    }

    isEmpty() {
        return this.length === 0;
    }

    rear() {
        if (this.isEmpty()) {
            return new Error();
        }
        return this.at(this.length - 1);
    }

    size() {
        return this.length;
    }
}
