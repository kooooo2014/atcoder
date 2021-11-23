// 問題文  ==============================================
//  高橋くんの家には電源プラグの差込口が 1 口しかありません。
// そこで、高橋くんは A 個口の電源タップをいくつか使って
// 未使用の差込口を B 口以上に拡張したいと考えています。

// A 個口の電源タップ 1 つと未使用の差込口 1 口を使って、
// 新たに差込口を A 口増やすことができます。

// 最小でいくつの電源タップが必要でしょうか。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    const [A, B] = input[0].split(" ").map(e => parseInt(e, 10));
    let ans = 0;
    let tap = 1;

    for(let i = 1; tap < B; i++){
        tap --;
        tap += A;
        ans = i;
    }
    console.log(ans);
     
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));