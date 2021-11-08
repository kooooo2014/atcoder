// 問題文  ==============================================
// E869120 君は、N 段の階段を上ろうとしています。彼は一歩で 1 段か L 段上ることができます。
// 0 段目から出発し、N 段目にたどり着くまでの移動方法が何通りあるかを求め、10^9+7 で割った余りを出力してください。
// ==============================================
'use strict';
function Main(input) {
    let [N, L] = input.split(" ").map(e => parseInt(e, 10));
    let dpStairs = [];
    dpStairs[0] = 1;
    dpStairs[1] = 1;
    dpStairs[L] = 1;

    for(let i = 2; i <= N; i++){
        if(i-L < 0){
            dpStairs[i] = dpStairs[i-1]
        }else{
            dpStairs[i] = (dpStairs[i-1] + dpStairs[i-L])% (10**9+7);
        }
    }
    console.log(dpStairs[N])
    

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));