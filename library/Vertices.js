export class Vertices extends Array {

    first() {
        return this.at(0);
    }

    last() {
        return this.at(this.length - 1);
    }

    remove(vertex) {
        const index = this.indexOf(vertex);
        this.splice(index, 1);
    }
}
