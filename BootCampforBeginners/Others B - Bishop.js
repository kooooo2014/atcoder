// 問題文  ==============================================
// 縦 H マス、横 W マスの盤面があります。 
// この盤面の左上隅のマスに角行の駒が置かれています。 
// 駒が 0 回以上の好きな回数の移動を繰り返して到達できるマス目は何個あるでしょうか？

// ただし、角行の駒は斜めに動くものとします。 
// より厳密には、駒が上から r1番目、左から c1番目のマスから
// 上から r2番目、左から c2番目のマス目に動ける条件は
// r1 +c1 =r2 +c2
// r1 −c1 =r2 −c2 
// のうちちょうど一方が成立することです。
// たとえば、駒が図の位置にあるとき、一回で移動できる場所は赤くなっているマスです。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    const [H, W] = input[0].split(" ").map(BigInt);
    let masu = H * W;
    
    if(H == 1 || W == 1){
        console.log("1");
        return;
    }
    
    if(masu % 2n == 0){
        console.log(String(masu / 2n));
    }else{
        console.log(String(masu / 2n + 1n));
    }

    return;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));