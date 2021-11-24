// 問題文  ==============================================
// N 個のソースコードがあり、i 個目のソースコードの特徴は 
// Ai1 ,Ai2 ,...,AiMの M 個の整数で表されます。
// また、整数 B1 ,B2 ,...,BM と 整数 C が与えられます。

// Ai1 B1 +Ai2 B2 +...+AiM BM +C>0 のときに限り、
// i 個目のソースコードはこの問題に正答するソースコードです。

// N 個のソースコードのうち、この問題に正答するソースコードの個数を求めてください。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    const [N, M, C] = input[0].split(" ").map(e => parseInt(e, 10));
    const B = input[1].split(" ").map(e => parseInt(e, 10));
    let A = [];
    for(let i = 0; i < N; i ++){
        A[i] = input[i+2].split(" ").map(e => parseInt(e, 10));
    }

    let count = 0;

    for(let i = 0; i < N; i++){
        let tmp = 0;
        for(let j = 0; j < M; j ++){
            tmp += A[i][j]*B[j];
        }
        tmp += C;
        if(tmp > 0){
            count ++;
        }
    }
    
    console.log(count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));