// 問題文  ==============================================
// 幅 A、奥行き B、高さ C の直方体の形をしたケーキがあります。
// あなたはケーキに対して、次の操作を行うことができます。
// ある面に平行な方向に切断する
// ただし、ケーキは動かしてはならない（複数のケーキに分割されている場合、これらを変形したり、別々に切ることはできない）

// 最小何回の操作で、全てのピースを立方体にすることができますか？
// ==============================================
'use strict';
function Main(input) {
    input = input.split(" ").map(BigInt);
    let a = input[0];
    let b = input[1];
    let c = input[2];

    const gcd = function () {
        const f = (x, y) => y ? f(y, x % y) : x
        let ans = arguments[0]
        for (let i = 1; i < arguments.length; i++) {
            ans = f(ans, arguments[i]);
        }
        return ans
    }
    
    const maxG = gcd(a, b, c);
    const cut = (a / maxG) + (b / maxG) + (c / maxG) -3n;
    console.log(String(cut));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));