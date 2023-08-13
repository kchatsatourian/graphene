$(document).ready(() => {
    "use strict";
    //query = query string i.e. "?title"
    let query = window.location.search;
    const home = "vertices-and-edges";
    if (query.length > 1) {
        query = query.substring(1);
        if (!chapters) $("#status-container h1").text("Error! The page does not exist."); else if (chapters.hasOwnProperty(query)) loadContent(query); else loadContent(home);
    } else loadContent(home);

    renderMathInElement(document.body, {
        delimiters: [{ left: "$$", right: "$$", display: true }, {
            left: "$",
            right: "$",
            display: false
        }, { left: "\\(", right: "\\)", display: true }, { left: "\\[", right: "\\]", display: true }],
        throwOnError: false
    });

    //chapIndex is used to set scrollTop value of map-list
    var chapIndex = 0, flag = true;

    //set map list
    if (chapters) {
        for (const chapter in chapters) {
            if (chapters.hasOwnProperty(chapter)) {
                let entry = "<li ";
                if ($("#content-title").text() === chapters[chapter]["content-title"]) {
                    entry += "class=\"current-chap\"";
                    flag = false;
                }
                entry += `><a href="?${chapter}">${chapters[chapter]["content-title"]}</a></li>`;
                $("#map-list ol").append(entry);
            }
            if (flag) chapIndex++;
        }
    }

    const contents = $("#contents-modal");
    $("#map-open").on("click", event => contents.modal("show"));
    contents.on("hidden.bs.modal", event => contents.hide());

    // Hide Toggle Content by default
    $(".toggle-content").each((index, element) => $(element).hide());

    // Toggle on click
    $(".toggle-link").click((event) => {
        $(event.currentTarget)
            .next(".toggle-content")
            .slideToggle();
        if ($(event.currentTarget).hasClass("target-hidden")) $(event.currentTarget).text("Click to Hide"); else $(event.currentTarget).text("Click to Show");
        $(event.currentTarget).toggleClass("target-hidden");
    });

    // Resizing theory and application areas in order to fit them in viewport.
    resize();
    $(window).on("resize", resize);
});

function toggle(element) {
    if (element.attr("hidden")) {
        element.removeAttr("hidden");
    } else {
        element.attr("hidden", true);
    }
}

// Set height of theory and application areas.
function resize() {
    const height = $(window).height() - 80;
    const width = $(window).width();

    const theory = $("#theory-area");
    theory.css("max-height", "");
    if (width >= 992) {
        theory.css("max-height", `${Math.max(height, 450)}px`);
    }
}

function loadContent(query) {
    const chapter = chapters[query];

    document.title = `${chapter["content-title"]} - Graphene`;

    toggle($("#status-container"));
    toggle($("#app-container"));

    // Set text contents.
    $("#content-title").html(chapter["content-title"]);
    $("#theory-content").html(chapter["theory-content"]);
    $("#interface-title h4").html(chapter["interface-title"]);
    $("#interface-content").html(chapter["interface-content"]);
    $("#controls").html(chapter["controls"]);
    $("#verdict").html(chapter["verdict"]);

    // Set previous chapter.
    if (chapter.previous) $(".previous").attr("href", chapter.previous);
    else $(".previous").attr("hidden", true);

    // Export vector.
    $("#extract").on("click", () => jQuery.ajax({
        success: stylesheet => extract(chapter, stylesheet), async: false, url: `chapters/${query}/${chapter.style}`
    }));

    // Set next chapter.
    if (chapter.next) $(".next").attr("href", chapter.next);
    else $(".next").addClass("hidden");

    // Load application stylesheet.
    $("head").append(`<link href="chapters/${query}/${chapter.style}" rel="stylesheet">`);

    // Load application script.
    $("body").append(`<script type="module" src="chapters/${query}/${chapter.script}"></script>`);
}

function extract(chapter, stylesheet) {
    const selection = d3.select("#vector");
    selection.node().textContent = stylesheet;
    const inner = $("#canvas")[0].innerHTML;
    const blob = new Blob([inner], { type: "image/svg+xml;charset=utf-8" });
    const element = document.getElementById("extract");
    element.href = URL.createObjectURL(blob);
    element.download = `${chapter.current}-${Date.now()}.svg`;
}
