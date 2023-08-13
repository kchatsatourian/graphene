import { Identifier } from "./Identifier.js";

export class Vertex {

    constructor(builder) {
        this.identifier = Identifier.generate();
        this.x = builder.ordinate;
        this.y = builder.abscissa;
        this.color = builder.color;
        this.degree = builder.degree;
        this.depth = builder.depth;
        this.fx = builder.fixedOrdinate;
        this.fy = builder.fixedAbscissa;
        this.parity = builder.parity;
    }

    static Builder() {

        class Builder {

            build() {
                return new Vertex(this);
            }

            withAbscissa(abscissa) {
                this.abscissa = abscissa;
                return this;
            }

            withColor(color) {
                this.color = color;
                return this;
            }

            withDegree(degree) {
                this.degree = degree;
                return this;
            }

            withDepth(depth) {
                this.depth = depth;
                return this;
            }

            withFixedAbscissa(fixedAbscissa) {
                this.fixedAbscissa = fixedAbscissa;
                return this;
            }

            withFixedOrdinate(fixedOrdinate) {
                this.fixedOrdinate = fixedOrdinate;
                return this;
            }

            withOrdinate(ordinate) {
                this.ordinate = ordinate;
                return this;
            }

            withParity(parity) {
                this.parity = parity;
                return this;
            }
        }

        return new Builder();
    }

    decrement() {
        if (this.degree > 0) {
            this.degree--;
        }
    }

    increment() {
        this.degree++;
    }
}
