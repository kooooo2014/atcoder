// 問題文  ==============================================
// AGC 街道には N 人の小学生が住んでおり、小学生 i (1≤i≤N) の家は位置 Aiにあります。
// また、小学校は N 校建てられており、小学校 j (1≤j≤N) は位置 Bjにあります。
// AGC 街道に住む小学生は性格が悪く、どの人同士も険悪な関係になっているため、全員が別の学校に通うようにしたいです。
// また、不便さは次のように定義されます。
// 小学生 i にとっての家から学校までの距離を Eiとするとき、不便さは距離の総和
// すなわち E1+E2+...+ENである。
// ただし、位置 u から位置 v までの距離は ∣u−v∣
// どの生徒も別の学校に通うという条件下における、不便さとして考えられる最小値を求めてください。
// ==============================================
'use strict';

function Main(input) {
    input = input.split("\n");
    let n = parseInt(input[0], 10);
    let a = input[1].split(" ").map(e => parseInt(e, 10));
    let b = input[2].split(" ").map(e => parseInt(e, 10));

    a.sort(function(a, b) {
        return a-b;
    });

    b.sort(function(a, b) {
        return a-b;
    });

    let sum = 0;

    for(let i = 0; i < n; i ++){
       sum += Math.abs(a[i] - b[i]);
    }

    console.log(sum)
    
}



Main(require("fs").readFileSync("/dev/stdin", "utf8"));