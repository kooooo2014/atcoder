// 問題文  ==============================================
// N 個の 6 面体サイコロがあり、1,2,3,⋯,N と番号付けられています。 サイコロ i の j (1≤j≤6) 番目の面には
// 整数 Ai,jが書かれています。ここで、それぞれのサイコロについて、書かれている整数は相異なります。
// さて、サイコロの出目に対して、次のように得点を定義します。
// 得点は N 個のサイコロの出目の総積である。 つまり、サイコロ i の出目を Riとしたとき、得点は R1×R2×⋯×RNと計算される。
// N 個のサイコロの出目の結果としては 6^N 通り考えられますが、これら全てにおける得点の総和 S を 10^9+7 で割った余りを求めてください。ただし、それぞれのサイコロは互いに区別できるものとします。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let N = parseInt(input[0], 10);
    let a = [];
    let tmp = 0;
    let ans = 1n;
    let mod = 1000000007n;
    for(let i = 0; i < N; i++){
        tmp = 0;
        a[i] = input[i+1].split(" ").map(e => parseInt(e, 10));
        for(let j = 0; j < 6; j++){
            tmp += a[i][j];
        }
        ans *= BigInt(tmp);
    }

    console.log(String(ans % mod));
    

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));