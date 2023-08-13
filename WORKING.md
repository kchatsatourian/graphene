# How Graphene Works

This document explains the structure and working of Graphene. It serves as a kickstarter for those who are
looking to contribute to the repository.

Graphene is a very simple client-side website. Functioning of its main components are explained below.

### 1. chapter.html

This file provides the barebones structure where all the contents will be loaded. There are two main elements it
contains:

- **`div#theory-area`:** the theory (text) of the chapter is loaded here
- **`div#app-area`:** the visualization of the chapter is loaded here

### 2. css/style.css

This stylesheet applies to `chapter.html` irrespective of the content loaded into it. Gives an overall look to the page.

### 3. chapters/

The content of Graphene is broken into several *chapters*. The `chapters/` directory contains the
visualizations for each chapter. Visualization of a chapter is contained in directory `chapters/chapter-name/`, which in
turn contains following two files

- **`app.js`:** the visualization of the chapter implemented using [d3.js v7](https://d3js.org/)
- **`app.css`:** styles specifically meant for this visualization

### 4. js/chapters.js

This file contains text-content and data of all the chapters in `json` format. The text-contents of each chapter are
minified and JSON-escaped.

### 5. js/control.js

This script is responsible for loading content into `chapter.html`. URL of each chapter is of the
form `chapter.html?chapter-name`. The script extracts `chapter-name` from query string and accordingly loads the text
from `chapters.js` and visualizations from `chapters/chapter-name/`.
