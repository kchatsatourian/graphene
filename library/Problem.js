export class Problem {

    constructor(builder) {
        this.graph = builder.graph;
        this.colors = builder.colors;
        this.message = builder.message;
    }

    static Builder() {

        class Builder {

            build() {
                return new Problem(this);
            }

            withColors(colors) {
                this.colors = colors;
                return this;
            }

            withGraph(graph) {
                this.graph = graph;
                return this;
            }

            withMessage(message) {
                this.message = message;
                return this;
            }
        }

        return new Builder();
    }
}
