// 問題文  ==============================================
// 
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let [N, Q] = input[0].split(" ").map(e => parseInt(e, 10));
    let A = input[1].split(" ").map(e => parseInt(e, 10));
    let ans = 0;
    let huben = Array(N-1).fill(0);


    for(let i = 0; i < N-1; i++){
        huben[i] = A[i+1]-A[i]
        ans += Math.abs(huben[i])
    }

    for(let i = 0; i < Q; i ++){
        const [L,R,V] = input[i+2].split(" ").map(e => parseInt(e, 10));
        
        if(L > 1){
            ans += Math.abs(huben[L-2] + V) - Math.abs(huben[L-2])
            huben[L-2] += V;
        }
        if(R < N){
            ans += Math.abs(huben[R-1] - V) - Math.abs(huben[R-1])
            huben[R-1] -= V;
        }

        console.log(ans);
    }    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));