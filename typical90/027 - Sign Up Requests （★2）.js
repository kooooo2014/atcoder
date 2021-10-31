// 問題文  ==============================================
// 
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let n = parseInt(input[0], 10);
    let set = new Set();
    for(let i = 1; i < n+1; i++){
        let words = input[i];
        if(set.has(words)){
            continue;
        }
        set.add(words);
        console.log(i)
    }    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));