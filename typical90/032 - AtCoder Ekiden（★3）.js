// 問題文  ==============================================
// ABC 陸上部には N 人の駅伝選手がいます。駅伝では 1 人の選手が 1 つの区を担当して走ります。
// 複数の選手が 1 つの区を担当することや 1 人の選手が複数の区を担当することはできません。
// 駅伝コースは第 1 区から第 N 区まであり、選手 i が第 j 区を走るのにかかる時間は Ai,jです。

// 駅伝は第 1 区、第 2 区、……、第 N 区の順にその区間を担当する選手が走ります。
// 第 j 区 (1≤j≤N−1) を走り終わった選手は第 j+1 区を走る選手にタスキを渡さなければいけません。
// このとき、タスキの受け渡しにかかる時間は十分短いため無視できます。
// 最後にタスキを受けとった選手が第 N 区を走りゴールとなります。

// さて、ABC 陸上部には M 個の噂があります。i 番目の噂は「選手 Xiと選手 Yiは仲が悪い」というものです。
// 噂をされている選手同士ではタスキの受け渡しができません。
// つまり、選手 Xiの直後に選手 Yiが走ることも選手 Yiの直後に選手 Xiが走ることもできません。

// ABC 陸上部が駅伝でゴールするまでにかかる時間の最小値を求めてください。
// ただし、各選手が走る区間をどのように決めてもゴールできない場合、代わりに -1 を出力してください。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let n = parseInt(input[0], 10);
    let m = parseInt(input[n+1], 10);
    let runner = [];
    let jyunban = [];
    for(let i = 0; i < n; i++){
        runner[i] = input[i+1].split(" ").map(e => parseInt(e, 10));
        jyunban[i] = i;
    }    

    let uwasa = [];
    let kenaku = Array.from(new Array(n), () => new Array(n).fill(true));
    for(let i = 0; i < m; i++){
        uwasa[i] = input[i+n+2].split(" ").map(e => parseInt(e, 10));
        kenaku[uwasa[i][0]-1][uwasa[i][1]-1] = false;
        kenaku[uwasa[i][1]-1][uwasa[i][0]-1] = false;
    }  
    
    if(n == 1){
        console.log(runner[0][0]);
        return;
    }
    
    function next_permutation(arr) {
        const len = arr.length;
        let left = len - 2;
        while (left >= 0 && arr[left] >= arr[left+1]) left--;
        if (left < 0) return false;
        let right = len - 1;
        while (arr[left] >= arr[right]) right--;
        { const t = arr[left]; arr[left] = arr[right]; arr[right] = t; }
        left++;
        right = len - 1;
        while (left < right) {
            { const t = arr[left]; arr[left] = arr[right]; arr[right] = t; }
            left++;
            right--;
        }
        return true;
    }

     
    let time = 0;
    let ans = 100001;
    do {
        
        for (let i = 0; i < n-1; i++) {
            if((kenaku[jyunban[i]][jyunban[i+1]] == true)){
                if(i == n-2){
                    time = 0
                    for(let j = 0; j < n; j++){
                        time += runner[jyunban[j]][j]
                    }
                    ans = Math.min(ans, time)
                }
                continue;
            }else{
                break;
            }
        }
    } while (next_permutation(jyunban));

    if(ans == 100001){
        console.log("-1");
    }else{
        console.log(ans);
    }
 }
Main(require("fs").readFileSync("/dev/stdin", "utf8"));