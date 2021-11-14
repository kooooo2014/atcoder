// 問題文  ==============================================
// 
// ==============================================
'use strict';
function Main(input) {
    let [N, K] = input.split(" ");
    K = Number(K);

    let count = 0;
    let n = '0o' + N;
    n = BigInt(n);

    let N9 = n.toString(9)

    for(let a = 0; a < K; a++){
        count = ( String(N9).match( /8/g ) || [] ).length;//文字列中の８の個数を返す

        for(let i = 0; i < count; i++){
            N9 = N9.replace("8", "5");
        }
        if(a == K-1){
            console.log(N9)
            return;
        }
       
        
        n = '0o' + N9;
        n = BigInt(n);
        N9 = n.toString(9);
    }
 
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));