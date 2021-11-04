// 問題文  ==============================================
// // E869120 くんは、冬に公開するイルミネーションを作成することを計画しています。
// E869120 くんが計画しているイルミネーションは、縦 H × 横 W の HW 個のLEDで構成されます。
// イルミネーションの各 LED は、点灯・消灯の状態を任意に切り替えることができます。

// このイルミネーションは、以下の条件を満たすとき 不適切である といいます。

// イルミネーション全体に完全に含まれる 縦 2 × 横 2 の、4 つの LED を含む領域であって、
// 点灯している LED が領域内に 2 つ以上あるものが存在する。
// 適切な（不適切な状態ではない）イルミネーションの点灯パターンのうち、
// 点灯している LED の個数としてありうる最大値を求めてください。
// ==============================================
'use strict';
function Main(input) {
    const [h, w] = input.split(" ").map(e => parseInt(e, 10));
    let led = Array.from(new Array(h+1), () => new Array(w+1).fill(true));
    let count = 0;

    if(h == 1 || w == 1){
        console.log(h*w);
        return;
    }
    
    for(let i = 0; i < h; i++){
        for(let j = 0; j < w; j++){
            if(led[i][j]){
                led[i][j+1] = false;
                led[i+1][j] = false;
                led[i+1][j+1] = false;
            }
        }
    }

    for(let i = 0; i < h; i++){
        for(let j = 0; j < w; j++){
            if(led[i][j]){
                count++;
            }
        }
    }   
    console.log(count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));