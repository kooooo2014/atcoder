// 問題文  ==============================================
// A 円硬貨、B 円硬貨、C 円硬貨をそれぞれ 0 枚以上使ってちょうど 
// N 円を支払うとき、使う硬貨の枚数として考えられる最小値を求めてください。

// ただし、それぞれの硬貨は無数にあるものとします。
// ==============================================
'use strict';

function Main(input) {
    input = input.split("\n");
    let n = parseInt(input[0], 10);
    let coins = input[1].split(" ").map(e => parseInt(e, 10));

    coins.sort(function(a, b) {
        return b-a;
    });

    let sum = 0;
    let ans = 9999;

    let aCount = Math.floor(n / coins[0]);
    for(let i = aCount; i >= 0; i--, aCount--){
        let bCount = 0;
        let cCount = 0;        
        bCount = Math.floor((n - aCount*coins[0]) / coins[1]);

        for(let j = bCount; j >= 0; j--, bCount--){
            cCount = Math.floor((n - aCount*coins[0] - bCount*coins[1]) / coins[2]);
            sum = aCount*coins[0] + bCount*coins[1] + cCount*coins[2];
            if(sum == n){
                ans = Math.min(ans, aCount+bCount+cCount); 
            }
        }
    }
    console.log(ans)

}



Main(require("fs").readFileSync("/dev/stdin", "utf8"));