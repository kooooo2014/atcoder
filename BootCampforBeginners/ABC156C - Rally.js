// 問題文  ==============================================
//  数直線上に N 人の人が住んでいます。

// i 番目の人が住んでいるのは座標 Xi です。
// あなたは N 人全員が参加する集会を開くことを考えています。
// 集会は数直線上の任意の 整数値の座標 で開くことができ、座標 P 
// で集会を開くとき、i 番目の人は集会に参加するために (Xi − P)^2の体力を消費します。

// N 人が消費する体力の総和としてありえる値の最小値を求めてください。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    let X = input[1].split(" ").map(e => parseInt(e, 10));
    let ans1 = 0;
    let ans2 = 0;
    X.sort(function(a, b) {
        return a-b;
    });

    let half = 0;
    let half1 = 0;
    let half2 = 0;
    
    for(let i = 0; i < N; i++){
        half += X[i];
    }
    half1 = Math.floor(half / N);
    half2 = half1 + 1;

    for(let i = 0; i < N; i++){
        ans1 += (X[i] - half1) ** 2;
        ans2 += (X[i] - half2) ** 2;
    }


    console.log(Math.min(ans1, ans2));
     
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));