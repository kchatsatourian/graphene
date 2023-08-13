export class Edge {

    constructor(builder) {
        this.source = builder.source;
        this.target = builder.target;
        this.weight = builder.weight;
    }

    static Builder() {

        class Builder {

            build() {
                return new Edge(this);
            }

            withSource(source) {
                this.source = source;
                return this;
            }

            withTarget(target) {
                this.target = target;
                return this;
            }

            withWeight(weight) {
                this.weight = weight;
                return this;
            }
        }

        return new Builder();
    }
}
