export class Node {

    constructor(builder) {
        this.left = builder.left;
        this.right = builder.right;
        this.value = builder.value;
    }

    static Builder() {

        class Builder {

            build() {
                return new Node(this);
            }

            withLeft(left) {
                this.left = left;
                return this;
            }

            withRight(right) {
                this.right = right;
                return this;
            }

            withValue(value) {
                this.value = value;
                return this;
            }
        }

        return new Builder();
    }
}
