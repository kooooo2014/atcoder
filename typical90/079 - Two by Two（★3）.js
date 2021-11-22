// 問題文  ==============================================
// H×W の 2 次元配列 A が与えられます。あなたは以下の 2 種類の操作を好きな順番で何度でも行うことが出来ます。

// 整数 x,y (1≤x<H,1≤y<W) を選び、Ax,y ,Ax+1,y ,Ax,y+1 ,Ax+1,y+1の値をそれぞれ 1 ずつ増やす。
// 整数 x,y (1≤x<H,1≤y<W) を選び、Ax,y ,Ax+1,y ,Ax,y+1 ,Ax+1,y+1の値をそれぞれ 1 ずつ減らす。
// 操作を 0 回以上行うことで A を B に一致させることは可能でしょうか。 
// もし可能ならば、最小の操作回数も答えてください。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let [H, W] = input[0].split(" ").map(e => parseInt(e, 10));
    let A = [];
    let B = [];
    let d = Array.from(new Array(H), () => new Array(W).fill(0));
    let count = 0;

    for(let i = 0; i < H; i++){
        A[i] = input[i+1].split(" ").map(e => parseInt(e, 10));
        B[i] = input[i+1+H].split(" ").map(e => parseInt(e, 10));
        
        for(let j = 0; j < W; j++){
            d[i][j] = B[i][j] - A[i][j];
        }        
    }

    for(let i = 0; i < H-1; i++){
        for(let j = 0; j < W-1; j++){
            count += Math.abs(d[i][j]);

            d[i][j+1] -= d[i][j];
            d[i+1][j] -= d[i][j]; 
            d[i+1][j+1] -= d[i][j]; 
            d[i][j] = 0;
        }
    }
    

    function yokoCheck(sa){
        let checkCount = 0;
        for(let a = 0; a < W; a++){
            if(a % 2 == 0){
                checkCount += sa[a];
            }else{
                checkCount -= sa[a];
            }
        }

        if(checkCount == 0){
            return true;
        }else{
            return false;
        }
    }

    for(let i = 0; i < H; i++){
        if(!yokoCheck(d[i])){
            console.log("No");
            return;
        }
    }

    console.log("Yes");
    console.log(count);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));