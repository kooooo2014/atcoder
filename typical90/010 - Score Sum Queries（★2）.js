// 問題文  ==============================================
// ABC 大学には N 人の一年生が在籍しています。クラスは 2 つあり、学籍番号 i 番の生徒のクラスは Ci組です。
// 今日は期末試験が返却され、学籍番号 i 番の生徒の点数は Pi点でした。
// 以下の形式の質問が Q 個与えられます。j=1,2,…,Q それぞれについて答えてください。

// 学籍番号 Lj∼Rj番の 1 組生徒における、期末試験点数の合計
// 学籍番号 Lj∼Rj番の 2 組生徒における、期末試験点数の合計
// これら 2 つの値をそれぞれ求めよ。
// ==============================================
'use strict';

function Main(input) {
    input = input.split("\n");
    let n = parseInt(input[0], 10);
    let class1 = [];
    class1[0] = 0;
    let class2 = [];
    class2[0] = 0;

    for(let i = 1; i < n+1; i ++){
        input[i] = input[i].split(" ").map(e => parseInt(e, 10));
        class1[i] = class1[i-1];
        class2[i] = class2[i-1];

        if(input[i][0] == 1){
            class1[i] = class1[i-1] + input[i][1];
        }else if(input[i][0] == 2){
            class2[i] = class2[i-1] + input[i][1];
        }
        
    }


    let q = parseInt(input[n+1], 10);
    let l = 0;
    let r = 0;

    for(let i = n+2; i < q + n+2; i++){
        input[i] = input[i].split(" ").map(e => parseInt(e, 10));
        l = input[i][0];
        r = input[i][1];
        console.log(class1[r] - class1[l-1], class2[r] - class2[l-1]);
    }
    

        
}



Main(require("fs").readFileSync("/dev/stdin", "utf8"));