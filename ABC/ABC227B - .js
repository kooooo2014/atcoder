'use strict';
function Main(input) {
    input = input.split("\n");
    let N = parseInt(input[0], 10);
    let S = input[1].split(" ").map(e => parseInt(e, 10));
    let s = Array(N).fill(true);
    
    let count = N;
    for(let n = 0; n < N; n++){
        for(let a = 1; a < S[n]; a++){
            for(let b = 1; a * b < S[n]; b++){
                if(4*a*b + 3*(a+b) == S[n] && s[n] == true){
                    count --;
                    s[n] = false;
                    break;
                }
            }
        }
    }
    
    console.log(count);  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));