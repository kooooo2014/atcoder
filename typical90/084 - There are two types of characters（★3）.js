// 問題文  ==============================================
// o と x からなる長さ N の文字列 S が与えられます。
// 以下の条件をすべて満たす整数の組 (l,r) の個数を求めてください。
//     1≤l≤r≤N
//     S の l 文字目から r 文字目までの区間に、o と x 両方が含まれる
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    const S = input[1].split("");
    let ans = N*(N-1)/2;
    

    for(let i = 0; i < N; i++){
        let tmp = S[i];
        let count = 0;

        if(S[i] == S[i+1]){
            while(tmp == S[i+count]){
                count ++;
            }
            i += count-1;
            ans -= count*(count-1)/2;
        } 
    }
    
    console.log(ans);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));