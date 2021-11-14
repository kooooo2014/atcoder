'use strict';
function Main(input) {
    let s = input.split("");
    let count = 0;

    if(s[0] == s[1] && s[0] == s[2]){
        console.log("1");
    }else if(s[0] == s[1] || s[0] == s[2] || s[1] == s[2]){
        console.log("3");
    }else if(s[0] != s[1] && s[0] != s[2] && s[1] != s[2]) {
        console.log("6")
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));