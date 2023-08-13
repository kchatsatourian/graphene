import { Edge } from "../../library/Edge.js";
import { Edges } from "../../library/Edges.js";
import { Graph } from "../../library/Graph.js";
import { KColorableCanvas } from "./KColorableCanvas.js";
import { Problem } from "../../library/Problem.js";
import { Vertex } from "../../library/Vertex.js";
import { Vertices } from "../../library/Vertices.js";

const colors = d3.schemeCategory10;

const problems = [
    Problem
        .Builder()
        .withColors(colors.slice(0, 3))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(31).withAbscissa(-35).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-63).withAbscissa(32).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-24).withAbscissa(-73).build(),
                    Vertex.Builder().withColor(0).withOrdinate(10).withAbscissa(35).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-81).withAbscissa(-33).build()
                ),
                new Edges(
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(4).withTarget(0).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withColors(colors.slice(0, 5))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(18).withAbscissa(37).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-88).withAbscissa(-29).build(),
                    Vertex.Builder().withColor(0).withOrdinate(36).withAbscissa(-39).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-60).withAbscissa(42).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-30).withAbscissa(-78).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(1).withTarget(4).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(3).withTarget(4).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withColors(colors.slice(0, 3))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(48).withAbscissa(-26).build(),
                    Vertex.Builder().withColor(0).withOrdinate(14).withAbscissa(97).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-70).withAbscissa(-72).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-3).withAbscissa(1).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-24).withAbscissa(-96).build(),
                    Vertex.Builder().withColor(0).withOrdinate(61).withAbscissa(75).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-56).withAbscissa(26).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(3).withTarget(5).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(1).withTarget(6).build(),
                    Edge.Builder().withSource(2).withTarget(6).build(),
                    Edge.Builder().withSource(4).withTarget(6).build(),
                    Edge.Builder().withSource(5).withTarget(6).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withColors(colors.slice(0, 3))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(-8).withAbscissa(22).build(),
                    Vertex.Builder().withColor(0).withOrdinate(95).withAbscissa(-32).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-31).withAbscissa(124).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-70).withAbscissa(-75).build(),
                    Vertex.Builder().withColor(0).withOrdinate(70).withAbscissa(74).build(),
                    Vertex.Builder().withColor(0).withOrdinate(31).withAbscissa(-125).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-96).withAbscissa(31).build(),
                    Vertex.Builder().withColor(0).withOrdinate(7).withAbscissa(-23).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(1).withTarget(4).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(3).withTarget(5).build(),
                    Edge.Builder().withSource(3).withTarget(6).build(),
                    Edge.Builder().withSource(1).withTarget(5).build(),
                    Edge.Builder().withSource(2).withTarget(6).build(),
                    Edge.Builder().withSource(4).withTarget(7).build(),
                    Edge.Builder().withSource(5).withTarget(7).build(),
                    Edge.Builder().withSource(6).withTarget(7).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withColors(colors.slice(0, 4))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(88).withAbscissa(48).build(),
                    Vertex.Builder().withColor(0).withOrdinate(80).withAbscissa(-67).build(),
                    Vertex.Builder().withColor(0).withOrdinate(5).withAbscissa(-5).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-32).withAbscissa(-96).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-19).withAbscissa(90).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-93).withAbscissa(2).build()
                ),
                new Edges(
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(2).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(4).build(),
                    Edge.Builder().withSource(5).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withColors(colors.slice(0, 3))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(-20).withAbscissa(88).build(),
                    Vertex.Builder().withColor(0).withOrdinate(2).withAbscissa(10).build(),
                    Vertex.Builder().withColor(0).withOrdinate(82).withAbscissa(7).build(),
                    Vertex.Builder().withColor(0).withOrdinate(3).withAbscissa(-92).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-19).withAbscissa(-14).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-99).withAbscissa(-10).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(0).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(0).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(1).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withColors(colors.slice(0, 4))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(-150).withAbscissa(5).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-65).withAbscissa(103).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-73).withAbscissa(-100).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-67).withAbscissa(2).build(),
                    Vertex.Builder().withColor(0).withOrdinate(21).withAbscissa(48).build(),
                    Vertex.Builder().withColor(0).withOrdinate(17).withAbscissa(-51).build(),
                    Vertex.Builder().withColor(0).withOrdinate(63).withAbscissa(119).build(),
                    Vertex.Builder().withColor(0).withOrdinate(55).withAbscissa(-125).build(),
                    Vertex.Builder().withColor(0).withOrdinate(108).withAbscissa(-4).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(1).withTarget(3).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(1).withTarget(4).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(2).withTarget(5).build(),
                    Edge.Builder().withSource(3).withTarget(5).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(4).withTarget(6).build(),
                    Edge.Builder().withSource(1).withTarget(6).build(),
                    Edge.Builder().withSource(5).withTarget(7).build(),
                    Edge.Builder().withSource(2).withTarget(7).build(),
                    Edge.Builder().withSource(4).withTarget(8).build(),
                    Edge.Builder().withSource(5).withTarget(8).build(),
                    Edge.Builder().withSource(6).withTarget(8).build(),
                    Edge.Builder().withSource(7).withTarget(8).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withColors(colors.slice(0, 4))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(-11).withAbscissa(3).build(),
                    Vertex.Builder().withColor(0).withOrdinate(38).withAbscissa(-91).build(),
                    Vertex.Builder().withColor(0).withOrdinate(95).withAbscissa(-1).build(),
                    Vertex.Builder().withColor(0).withOrdinate(44).withAbscissa(93).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-61).withAbscissa(96).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-116).withAbscissa(5).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-67).withAbscissa(-87).build(),
                    Vertex.Builder().withColor(0).withOrdinate(123).withAbscissa(-81).build(),
                    Vertex.Builder().withColor(0).withOrdinate(128).withAbscissa(77).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-7).withAbscissa(161).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-147).withAbscissa(85).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-151).withAbscissa(-73).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-16).withAbscissa(-156).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build(),
                    Edge.Builder().withSource(0).withTarget(6).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(6).build(),
                    Edge.Builder().withSource(6).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(7).build(),
                    Edge.Builder().withSource(2).withTarget(7).build(),
                    Edge.Builder().withSource(2).withTarget(8).build(),
                    Edge.Builder().withSource(3).withTarget(8).build(),
                    Edge.Builder().withSource(3).withTarget(9).build(),
                    Edge.Builder().withSource(4).withTarget(9).build(),
                    Edge.Builder().withSource(4).withTarget(10).build(),
                    Edge.Builder().withSource(5).withTarget(10).build(),
                    Edge.Builder().withSource(5).withTarget(11).build(),
                    Edge.Builder().withSource(6).withTarget(11).build(),
                    Edge.Builder().withSource(6).withTarget(12).build(),
                    Edge.Builder().withSource(1).withTarget(12).build(),
                    Edge.Builder().withSource(9).withTarget(10).build(),
                    Edge.Builder().withSource(10).withTarget(11).build(),
                    Edge.Builder().withSource(11).withTarget(12).build(),
                    Edge.Builder().withSource(12).withTarget(7).build(),
                    Edge.Builder().withSource(7).withTarget(8).build(),
                    Edge.Builder().withSource(8).withTarget(9).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withColors(colors.slice(0, 2))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(-24).withAbscissa(161).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-126).withAbscissa(93).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-55).withAbscissa(-9).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-106).withAbscissa(-121).build(),
                    Vertex.Builder().withColor(0).withOrdinate(8).withAbscissa(-170).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-57).withAbscissa(-81).build(),
                    Vertex.Builder().withColor(0).withOrdinate(36).withAbscissa(-1).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-70).withAbscissa(62).build(),
                    Vertex.Builder().withColor(0).withOrdinate(39).withAbscissa(71).build(),
                    Vertex.Builder().withColor(0).withOrdinate(53).withAbscissa(-70).build(),
                    Vertex.Builder().withColor(0).withOrdinate(108).withAbscissa(-100).build(),
                    Vertex.Builder().withColor(0).withOrdinate(88).withAbscissa(112).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-158).withAbscissa(-18).build(),
                    Vertex.Builder().withColor(0).withOrdinate(141).withAbscissa(11).build()
                ),
                new Edges(
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(6).build(),
                    Edge.Builder().withSource(6).withTarget(7).build(),
                    Edge.Builder().withSource(7).withTarget(0).build(),
                    Edge.Builder().withSource(1).withTarget(12).build(),
                    Edge.Builder().withSource(3).withTarget(12).build(),
                    Edge.Builder().withSource(5).withTarget(12).build(),
                    Edge.Builder().withSource(7).withTarget(12).build(),
                    Edge.Builder().withSource(0).withTarget(8).build(),
                    Edge.Builder().withSource(8).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(9).build(),
                    Edge.Builder().withSource(9).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(10).build(),
                    Edge.Builder().withSource(10).withTarget(6).build(),
                    Edge.Builder().withSource(6).withTarget(11).build(),
                    Edge.Builder().withSource(11).withTarget(0).build(),
                    Edge.Builder().withSource(8).withTarget(13).build(),
                    Edge.Builder().withSource(9).withTarget(13).build(),
                    Edge.Builder().withSource(10).withTarget(13).build(),
                    Edge.Builder().withSource(11).withTarget(13).build()
                )
            )
        )
        .build(),
    Problem
        .Builder()
        .withColors(colors.slice(0, 4))
        .withGraph(
            new Graph(
                new Vertices(
                    Vertex.Builder().withColor(0).withOrdinate(-46).withAbscissa(44).build(),
                    Vertex.Builder().withColor(0).withOrdinate(54).withAbscissa(15).build(),
                    Vertex.Builder().withColor(0).withOrdinate(32).withAbscissa(130).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-98).withAbscissa(97).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-134).withAbscissa(-32).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-20).withAbscissa(-57).build(),
                    Vertex.Builder().withColor(0).withOrdinate(127).withAbscissa(32).build(),
                    Vertex.Builder().withColor(0).withOrdinate(13).withAbscissa(57).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-61).withAbscissa(-15).build(),
                    Vertex.Builder().withColor(0).withOrdinate(-39).withAbscissa(-130).build(),
                    Vertex.Builder().withColor(0).withOrdinate(91).withAbscissa(-97).build(),
                    Vertex.Builder().withColor(0).withOrdinate(39).withAbscissa(-44).build()
                ),
                new Edges(
                    Edge.Builder().withSource(1).withTarget(2).build(),
                    Edge.Builder().withSource(2).withTarget(3).build(),
                    Edge.Builder().withSource(3).withTarget(4).build(),
                    Edge.Builder().withSource(4).withTarget(5).build(),
                    Edge.Builder().withSource(5).withTarget(1).build(),
                    Edge.Builder().withSource(6).withTarget(1).build(),
                    Edge.Builder().withSource(6).withTarget(2).build(),
                    Edge.Builder().withSource(7).withTarget(2).build(),
                    Edge.Builder().withSource(7).withTarget(3).build(),
                    Edge.Builder().withSource(8).withTarget(3).build(),
                    Edge.Builder().withSource(8).withTarget(4).build(),
                    Edge.Builder().withSource(9).withTarget(4).build(),
                    Edge.Builder().withSource(9).withTarget(5).build(),
                    Edge.Builder().withSource(10).withTarget(5).build(),
                    Edge.Builder().withSource(10).withTarget(1).build(),
                    Edge.Builder().withSource(6).withTarget(7).build(),
                    Edge.Builder().withSource(7).withTarget(8).build(),
                    Edge.Builder().withSource(8).withTarget(9).build(),
                    Edge.Builder().withSource(9).withTarget(10).build(),
                    Edge.Builder().withSource(10).withTarget(6).build(),
                    Edge.Builder().withSource(11).withTarget(6).build(),
                    Edge.Builder().withSource(11).withTarget(7).build(),
                    Edge.Builder().withSource(11).withTarget(8).build(),
                    Edge.Builder().withSource(11).withTarget(9).build(),
                    Edge.Builder().withSource(11).withTarget(10).build(),
                    Edge.Builder().withSource(0).withTarget(1).build(),
                    Edge.Builder().withSource(0).withTarget(2).build(),
                    Edge.Builder().withSource(0).withTarget(3).build(),
                    Edge.Builder().withSource(0).withTarget(4).build(),
                    Edge.Builder().withSource(0).withTarget(5).build()
                )
            )
        )
        .build()
];

new KColorableCanvas(problems);
