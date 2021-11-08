'use strict';
function Main(input) {
    console.log(Math.round(input));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));