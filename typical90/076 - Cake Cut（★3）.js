// 問題文  ==============================================
// N 個のピースに分かれている円形のホールケーキがあり、
// 時計回りで i 番目にあるピース（以下、ピース i とする）の大きさは Aiです。
// 1≤i≤N−1 に対し、ピース i とピース i+1 は隣接しており、ピース N とピース 1 も隣接しています。

// ケーキのある連続するピースを選ぶ方法であって、
// 選んだ部分が全体の大きさのちょうど 10 分の 1 になるものは存在するか、判定してください。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map(e => parseInt(e, 10));

    let a = A.concat(A);
    let peace = 0;

    for(let i = 0;  i < N; i++){
        peace += A[i];
    }
    peace /= 10;

    if(!Number.isInteger(peace)){
        console.log("No");
        return;
    }

    let s = [];
    s[0] = a[0];
    for(let i = 1; i < a.length; i++){
        s[i] = a[i] + s[i-1];
    }

    function binary_search(peace) {        
        for(let i = 0; i < s.length; i++){
            let searchLeft = i;
            let searchRight = s.length-1;
            let half;

            let key = s[i] + peace;
            
            while (searchRight >= searchLeft) {   
                if(searchRight-searchLeft == 1 || searchRight-searchLeft == 0){
                    if(s[searchRight] == key || s[searchLeft] == key){
                        return true;
                    }else{
                        break;
                    }
                } 
                half = Math.ceil((searchRight + searchLeft) / 2);
                
                if (key < s[half]) {
                    searchRight = half;
                } else if (key > s[half]) {
                    searchLeft = half;
                } else if (key == s[half]) {
                    return true;
                }
            }
        }
        return false;
    }

    if(binary_search(peace)){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));