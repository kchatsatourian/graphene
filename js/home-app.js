$(document).ready(() => {
    "use strict";
    /*
      GRAPH STUFF BEGINS
    */
    var width = Math.max($(window).width(), 640), height = Math.min($(window).height(), width);

    const intro = $("#intro");
    var introH = intro.height();
    intro.css("margin-top", `${(height - introH) / 2}px`);

    var nodes = d3.range(91).map(val => ({
        radius: Math.floor(Math.random() * 8) + 7,
        id: val,
        degree: 0,
        x: Math.random() * width,
        y: Math.random() * height
    }));

    var links = [], root = nodes[0], color = d3.schemeSet3, maxDegree = 5, maxLinkLen = 100, maxLinkTick = 200;

    root.radius = 0;
    root.fx = width / 2;
    root.fy = height / 2;

    var svg = d3
        .select("#home-graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var edges = svg.append("g").selectAll("line");

    var vertices = svg
        .selectAll("circle")
        .data(nodes.slice(1), d => d.id)
        .enter()
        .append("circle")
        .attr("r", d => d.radius)
        .style("fill", (d, i) => color[i % 12]);

    var force = d3
        .forceSimulation(nodes)
        .force("charge", d3
            .forceManyBody()
            .strength((d, i) => i ? -30 : -2000)
            .distanceMax((width + height) / 2))
        .force("link", d3
            .forceLink(links)
            .distance(69)
            .strength(0.9))
        .force("x", d3.forceX(width / 2).strength(0.05))
        .force("y", d3.forceY(height / 2).strength(0.05))
        .on("tick", tick);

    function tick() {
        var q = d3
            .quadtree()
            .x(d => d.x)
            .y(d => d.y)
            .addAll(nodes);

        var i = 0, n = nodes.length;

        //Collide detection; nodes are connected by edge when they get close enough
        while (++i < n) q.visit(collide(nodes[i]));

        vertices
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        edges
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        //delete edges after fixed number of ticks
        links.forEach((l, i) => {
            if (l.tickCounter < maxLinkTick) {
                l.tickCounter++;
            } else {
                l.source.degree--;
                l.target.degree--;
                links.splice(i, 1);
                updateEdges();
            }
        });
    }

    //repel nodes by cursor
    svg
        .on("mousemove", event => {
            var coords = d3.pointer(event, event.currentTarget);
            root.fx = coords[0];
            root.fy = coords[1];
            force.alpha(0.8).restart();
        })
        .on("contextmenu", event => event.preventDefault());

    //collision detection
    function collide(node) {
        //r decides the size of square in which nearby nodes will be checked for collision
        //if r < max dist b/w two touching nodes
        //then some bigger nodes may not connect in spite of touching each other
        //less the value of r, less is frequency of adding links
        var r = node.radius + 7, nx1 = node.x - r, nx2 = node.x + r, ny1 = node.y - r, ny2 = node.y + r;

        return (qnode, x1, y1, x2, y2) => {
            //if qnode.length is undefined, then qnode is leaf and qnode.data exists
            if (!qnode.length && qnode.data !== node && node.degree < maxDegree && links.length < maxLinkLen) {
                let qd = qnode.data;
                let x = node.x - qd.x, y = node.y - qd.y, l = Math.sqrt(x * x + y * y), r = node.radius + qd.radius;

                //add edge b/w the nodes if they touch/overlap
                if (l <= r && qd.id !== 0 && qd.degree < maxDegree) {
                    node.degree++;
                    qd.degree++;
                    links.push({ source: node, target: qd, tickCounter: 0 });
                    updateEdges();
                }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        };
    }

    function updateEdges() {
        edges = edges.data(links);
        edges.exit().remove();
        edges = edges
            .enter()
            .append("line")
            .merge(edges);
        force.nodes(nodes);
        force.force("link").links(links);
        force.alpha(0.8).restart();
    }

    $(window).on("resize", () => {
        width = Math.max($(window).width(), 640);
        height = Math.min($(window).height(), width);
        svg.attr("width", width).attr("height", height);
        force.force("x").x(width / 2);
        force.force("y").y(height / 2);
        introH = intro.height();
        intro.css("margin-top", `${(height - introH) / 2}px`);
        root.fx = width / 2;
        root.fy = height / 2;
    });

    /*
      GRAPH STUFF ENDS
    */

    // Generate contents from chapters.js.
    const contents = $("#contents-collapsed");
    if (chapters) {
        let index = 1;
        for (const chapter in chapters) {
            if (chapters.hasOwnProperty(chapter)) {
                contents.append(`
                    <div class="col-md-4 col-xs-6 list-container">
                        <a class="list-wrap" href="chapter.html?${chapter}">
                            <span class="fw-bold list-counter text-center">${index++}</span>
                            <span class="list-item">${chapters[chapter]["content-title"]}</span>
                        </a>
                    </div>
                `);
            }
        }
    }

    // Expand or collapse the content list.
    $("#contents-expanded .btn").click(function() {
        if ($(this).text() === "Show All") {
            contents.css("max-height", 10000);
            $(this).text("Show Less");
        } else {
            contents.css("max-height", 270);
            $(this).text("Show All");
        }
    });

    // Select a random chapter from the content list.
    const list = $("a.list-wrap");
    const index = Math.floor(Math.random() * list.length);
    $("a#random-loader").attr("href", list[index].getAttribute("href"));

    // Remove transparency from nav on scrolling.
    const navigation = $("#navigation");
    window.addEventListener("scroll", () => window.scrollY > 160 ? navigation.removeClass("transparent") : navigation.addClass("transparent"), false);
});
