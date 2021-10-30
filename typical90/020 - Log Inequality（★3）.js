// 問題文  ==============================================
// log2 a < b*log2 cですか？
// ==============================================
'use strict';
function Main(input) {
    input = input.split(" ").map(BigInt);//ここでBigIntにするのがポイント
    let a = input[0];
    let b = input[1];
    let c = input[2];

    if(c ** b > a){
        console.log("Yes");
    }else{
        console.log("No")
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));