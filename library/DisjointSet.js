import { Element } from "./Element.js";

export class DisjointSet {

    constructor() {
        this.map = new Map();
    }

    find(element) {
        if (element !== element.parent) {
            return this.find(element.parent);
        }
        return element.parent;

    }

    findSet(object) {
        const element = this.map.get(object);
        return this.find(element).object;
    }

    makeSet(object) {
        const element = Element.Builder().withObject(object).withRank(0).build();
        this.map.set(object, element);
    }

    union(x, y) {
        const source = this.find(this.map.get(x));
        const target = this.find(this.map.get(y));

        if (source.object === target.object) {
            return;
        }

        if (source.rank < target.rank) {
            source.parent = target;
            return;
        }

        target.parent = source;
        if (source.rank === target.rank) {
            source.rank += 1;
        }
    }
}
