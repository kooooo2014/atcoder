// 問題文  ==============================================
// N 問からなる試験があります。i 番目の問題は満点が Ai点、部分点が Bi点です。
// ここで、部分点は満点より小さく満点の半分より大きいです。
// つまりAi/2 <Bi <Aiを満たします。
// E869120 君はどの問題についても 1 分かけると部分点を取ることができ、さらに 1 分かけると満点を取ることができます。
// 試験時間 K 分間で E869120 君が得られる合計得点の最大値を求めてください。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let [N, K] = input[0].split(" ").map(e => parseInt(e, 10));
    let testPoint = [];
    for(let i = 0; i < N; i++){
        let a = input[i+1].split(" ").map(e => parseInt(e, 10));
        testPoint[2*i] = a[0]-a[1];
        testPoint[2*i+1] = a[1];
    }
    
    testPoint.sort(function(a, b) {
        return b-a;
    });

    let count = 0;
    for(let j = 0; j < K; j++){
        count += testPoint[j];
    }

    console.log(count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));