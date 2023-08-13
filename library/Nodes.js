export class Nodes extends Array {

    first() {
        return this.at(0);
    }

    last() {
        return this.at(this.length - 1);
    }

    remove(node) {
        const index = this.indexOf(node);
        this.splice(index, 1);
    }
}
