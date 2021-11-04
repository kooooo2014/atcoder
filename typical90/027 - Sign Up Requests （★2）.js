// 問題文  ==============================================
// 低橋くんはプログラミングコンテストサイト「LowCoder」を作り、サービスを開始しました。
// 今日の時点では、LowCoder にはユーザはいません。

// 今日から数えて i (1≤i≤N) 日後には、ユーザ名 Siを希望するユーザが登録申請を行います。
// 申請を行った時点でユーザ名が Siであるユーザが存在する場合、その登録申請は無視されます。
// そのようなユーザが存在しない場合は登録申請が受理され、LowCoder にそのユーザが登録されます。

// 何日目の登録申請が受理されるかを求めてください。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let n = parseInt(input[0], 10);
    let set = new Set();
    for(let i = 1; i < n+1; i++){
        let words = input[i];
        if(set.has(words)){
            continue;
        }
        set.add(words);
        console.log(i)
    }    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));