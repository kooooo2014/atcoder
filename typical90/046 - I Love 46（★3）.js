// 問題文  ==============================================
// 3 つの長さ N の数列 A=(A1 ,A2 ,⋯,AN),B=(B1 ,B2 ,⋯,BN),C=(C1 ,C2 ,⋯,CN) が与えられます。
// Ai +Bj +Ck が 46 の倍数となるような (i,j,k) (1≤i,j,k≤N) の選び方の総数を出力してください。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let N = parseInt(input[0], 10);
    let A = input[1].split(" ").map(e => parseInt(e, 10));
    let B = input[2].split(" ").map(e => parseInt(e, 10));
    let C = input[3].split(" ").map(e => parseInt(e, 10));

    let modA = Array.from(new Array(46), () => new Array(1).fill(0));
    let modB = Array.from(new Array(46), () => new Array(1).fill(0));
    let modC = Array.from(new Array(46), () => new Array(1).fill(0));
    for(let i = 0; i < N; i++){
        modA[A[i] % 46].push(A[i]);
        modB[B[i] % 46].push(B[i]);
        modC[C[i] % 46].push(C[i]);
    }

    let count = 0;
    let ans = 0;
    for(let i = 0; i < 46; i++){
        for(let j = 0; j < 46; j++){
            let k = (46 - (i+j) % 46) % 46;
            count = (modA[i].length-1) * (modB[j].length-1) * (modC[k].length-1);
            if(count > 0){
                ans += count;
            }
            
        }
    }

    console.log(ans);
    
    

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));