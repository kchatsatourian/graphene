import { Canvas } from "../../library/Canvas.js";
import { Utilities } from "../../library/Utilities.js";

export class ChromaticNumberCanvas extends Canvas {

    constructor(problems) {
        super(Utilities.clone(problems[0].graph));

        this.problems = problems;
        this.problem = 0;

        d3
            .select("#prev-prob")
            .on("click", () => {
                if (this.problem > 0) {
                    this.problem--;
                    this.solve();
                }
            });

        d3
            .select("#next-prob")
            .on("click", () => {
                if (this.problem < this.problems.length - 1) {
                    this.problem++;
                    this.solve();
                }
            });

        this.pagination = d3.select("#problems");

        this
            .pagination
            .selectAll("a")
            .on("click", event => {
                const element = event.currentTarget.closest("li");
                const elements = Array.from(element.closest("ul").children);
                this.problem = elements.indexOf(element);
                this.solve();
            });

        this.draw();

        this.latex();

        this.solve();
    }

    alpha() {
        return 0.6;
    }

    fill(vertex) {
        const colors = this.colors();
        return colors[vertex.color];
    }

    force(strength = -400, distance = 100) {
        return super.force(strength, distance);
    }

    listen() {
    }

    message() {
        return this.problems[this.problem].message;
    }

    name() {
        return "chromatic-number";
    }

    register() {
        this
            .vector
            .on("contextmenu", event => event.preventDefault());
    }

    // TODO Recreate this object instead.
    solve() {
        this.clear();

        this.graph = Utilities.clone(this.problems[this.problem].graph);

        this.draw();
        this.latex();

        if (this.problem === 0) {
            $("#prev-prob").attr("hidden", true);
            $("#next-prob").removeAttr("hidden");
        } else if (this.problem === this.problems.length - 1) {
            $("#prev-prob").removeAttr("hidden");
            $("#next-prob").attr("hidden", true);
        } else {
            $("#prev-prob").removeAttr("hidden");
            $("#next-prob").removeAttr("hidden");
        }

        this
            .pagination
            .select(".prob-current")
            .classed("prob-current", false);

        this
            .pagination
            .selectAll("a")
            .each((element, index, elements) => {
                if (index === this.problem) d3.select(elements[index]).classed("prob-current", true);
            });
    }

    spread() {
        // TODO
        // Either keep this method empty
        // Or...
        // You can modify the parent constructor.
    }
}
