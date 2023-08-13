import { Canvas } from "../../library/Canvas.js";
import { Utilities } from "../../library/Utilities.js";

export class KColorableCanvas extends Canvas {

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

    color(event) {
        if (event.ctrlKey || event.button !== 0) return;

        const colors = this.colors();
        const length = colors.length;

        d3
            .select(event.currentTarget)
            .style("fill", vertex => {
                vertex.color = (vertex.color + 1) % length;
                return colors[vertex.color];
            });

        this.latex();
    }

    colors() {
        const problem = this.problems[this.problem];
        return [...problem.colors];
    }

    fill(vertex) {
        const colors = this.colors();
        return colors[vertex.color];
    }

    force(strength = -400, distance = 100) {
        return super.force(strength, distance);
    }

    listen() {
        this
            .vertices
            .selectAll("circle")
            .on("click", this.color.bind(this));

        this
            .edges
            .on("mousedown", event => event.stopPropagation());
    }

    message() {
        const colors = this.colors();

        if (this.validate()) {
            if (this.problem === this.problems.length - 1) {
                return String.raw`\text{You did it!}`;
            } else {
                return String.raw`\text{You did it! Proceed to next problem.}`;
            }
        }

        return String.raw`\text{You can use at most ${colors.length} colors.}`;
    }

    name() {
        return "k-colorable";
    }

    register() {
        this
            .vector
            .on("contextmenu", event => event.preventDefault());
    }

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

    validate() {
        let flag = false;

        for (const node of this.edges.nodes()) {
            const edge = d3.select(node);
            const datum = edge.datum();
            if (datum.source.color === datum.target.color) {
                edge.classed("same-color", true);
            } else {
                edge.classed("same-color", false);
                flag = true;
            }
        }

        if (flag) {
            this
                .pagination
                .selectAll("a")
                .each((element, index, elements) => {
                    if (index === this.problem) d3.select(elements[index]).classed("prob-solved", true);
                });
        }

        return flag;
    }
}
