'use strict';
function Main(input) {
    input = input.split("\n");
    let N = parseInt(input[0], 10);
    let a = [];
    for(let i = 0; i < N; i++){
        a[i] = input[i+1].split(" ").join(",");
        
    }

    const set = new Set();
    for(let i = 0; i < N; i++){
        if(set.has(a[i])){
            continue;
        }else{
            set.add(a[i])
        }
    }
    console.log(set.size);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));