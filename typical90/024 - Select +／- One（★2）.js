// 問題文  ==============================================
// 長さ N の正整数列 A=(A1 ,A2 ,…,AN) および B=(B1,B2,…,BN) が与えられます。

// 次の操作をちょうど K 回行うことで A を B に一致させることができるか判定してください。

// 操作：1≤i≤N を満たす i をひとつ選び Aiを Ai−1 または Ai+1 に置き換える
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    const [n, k] = input[0].split(" ").map(e => parseInt(e, 10)); 
    let a = input[1].split(" ").map(e => parseInt(e, 10));
    let b = input[2].split(" ").map(e => parseInt(e, 10));

    
    let sum = 0;
    for(let i = 0; i < n; i ++){
        sum += Math.abs(a[i]-b[i]);
    }

    if((Math.abs(sum - k) % 2 == 0) && k >= sum){
        console.log("Yes")
    }else{
        console.log("No");
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));