export class Edges extends Array {

    find(source, target) {
        return super.find(edge => edge.source === source && edge.target === target);
    }

    remove(edge) {
        const index = this.indexOf(edge);
        this.splice(index, 1);
    }
}
