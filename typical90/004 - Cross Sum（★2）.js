// 問題文  ==============================================
// H 行 W 列のマス目があります。上から i (1≤i≤H) 行目、左から j (1≤j≤W) 列目にあるマス (i,j) には、
// 整数 A (i,j) が書かれています。 
// すべてのマス (i,j) (1≤i≤H,1≤j≤W) について、以下の値を求めてください。

// マス (i,j) と同じ行または同じ列にあるマス（自分自身を含む）に書かれている整数をすべて合計した値
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let map = [];
    let ans = [];
    

    for(let i = 1; i < input.length - 1; i++){
        map[i-1] = input[i].split(" ").map(e => parseInt(e, 10));
        //.map(e => parseInt(e, 10));は配列をすべてnumber型に
        
    }

    let rowSum = [];
    for(let i = 0; i < map.length; i++){
        rowSum[i] = map[i].reduce(
            function(sum, element){
                return sum + element;
            }, 0);
        
    }

    let columnSum = [];
    for(let j = 0; j < map[0].length; j++){
        columnSum[j] = 0;
        for(let i = 0; i < map.length; i++){
            columnSum[j] += map[i][j] 
        }
    }
    
    for(let i = 0; i < map.length; i++){
        ans[i] = []
        for(let j = 0; j < map[0].length; j++){
            ans[i][j] = rowSum[i] + columnSum[j] - map[i][j];
        }
        console.log(ans[i].join(" "));
    }


    
}



Main(require("fs").readFileSync("/dev/stdin", "utf8"));