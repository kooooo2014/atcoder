// 問題文  ==============================================
// N 頂点 M 辺の連結な単純無向グラフが与えられます。
// グラフの頂点には、それぞれ 1 から N までの番号が振られています。 
// i 番目の辺は、頂点 ai と bi を双方向に結んでいます。
// 以下の条件を満たす頂点の個数はいくつあるか出力してください。

// 自分自身より頂点番号が小さい隣接頂点がちょうど 1 つ存在する
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let [N, M] = input[0].split(" ").map(e => parseInt(e, 10));
    let nm = [];
    let graph = Array.from(new Array(N), () => new Array(1).fill(0));

    for(let i = 0; i < M; i++){
        nm[i] = input[i+1].split(" ").map(e => parseInt(e, 10));
        
        if(nm[i][0] < nm[i][1]){
            graph[nm[i][1] - 1].push(nm[i][0]);
        }else{
            graph[nm[i][0] - 1].push(nm[i][1]);
        }        
    }

    let count = 0;

    for(let i = 0; i < N; i++){
        if(graph[i].length - 1 == 1)
        count ++;
    }
    console.log(count);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));