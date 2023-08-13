export class Element {

    constructor(builder) {
        this.object = builder.object;
        this.parent = this;
        this.rank = builder.rank;
    }

    static Builder() {

        class Builder {

            build() {
                return new Element(this);
            }

            withObject(object) {
                this.object = object;
                return this;
            }

            withRank(rank) {
                this.rank = rank;
                return this;
            }
        }

        return new Builder();
    }
}
