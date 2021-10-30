// 問題文  ==============================================
// 平面 x=0 上に、高さ L の T 分で一周する観覧車があります。 
// 観覧車は円形になっており、次のように一定の速さで動きます。 
// ただし、xy 平面が水平方向、z 軸が垂直方向です。

// 乗ってから 0 分後には、座標 (0,0,0) にある
// 乗ってからT/4分後には、座標 (0,−2L,2L) にある
// 乗ってからT/2分後には、座標 (0,0,L) にある
// 乗ってから 3T/4分後には、座標 (0, 2L, 2L) にある
// 観覧車の名物である「高橋直大像」は、座標 (X,Y,0) に存在します。 以下の形式の質問が Q 個与えられるので、順に答えてください。

// i 個目の質問では、E869120 君が観覧車に乗ってから Ei分後における、E869120 君から見た高橋直大像の俯角を求めよ。
// ==============================================
'use strict';

function Main(input) {
    input = input.split("\n");
    let T = parseInt(input[0], 10);
    let LXY = input[1].split(" ").map(e => parseInt(e, 10));
    let Q = parseInt(input[2], 10);

    let E = [];
    for(let i = 0; i < Q; i ++){
        E[i] = parseInt(input[i+3], 10);
    }

    let L = LXY[0];
    let X = LXY[1];
    let Y = LXY[2];
    let y = 0;
    let z = 0;
    let ans = [];
    

    for(let i = 0; i < Q; i ++){
        let theta = ((2 * Math.PI ) * E[i]  / T) - (Math.PI / 2) ;
        
        y = -(Math.cos(theta) * (L / 2));
        y = (Math.round(y * 10000000)) / 10000000;//小数第何位まで誤差を認める場合、その桁数だけ小数点を残す
        z = (Math.sin(theta) + 1) * L / 2;
        z = (Math.round(z * 10000000)) / 10000000;

        let lastX = Math.sqrt(Math.abs(Y-y) ** 2 + X ** 2)

        ans[i] = Math.atan(z / lastX) / Math.PI * 180;
    }
    console.log(ans.join("\n"));

}



Main(require("fs").readFileSync("/dev/stdin", "utf8"));