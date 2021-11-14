// 問題文  ==============================================
// N 個のブロックが横一列に並んでおり、左から順に 1 から N までの番号が付けられています。
// これらのブロックそれぞれを、K 種類の色のうちいずれか一色で塗ることを考えます。
// ここで、次の条件を満たすように塗らなければなりません。

// 1≤∣i−j∣≤2 ならば、ブロック i とブロック j に塗られている色は異なる。
// ただし、使わない色があってもよい。

// このようなブロックの塗り方が何通りあるかを、10^9+7 で割った余りを出力してください。
// ただし、2 つのブロックの列の塗り方が異なるとは、ある 1 以上 N 以下の整数 i が存在して、
// ブロック i について異なる色で塗られていることとします。
// ==============================================
'use strict';
function Main(input) {
    const [N, K] = input.split(" ").map(BigInt);
    const mod = 10n**9n + 7n;
 
    let a = K * (K-1n);
    let b = K-2n;
    let n = N-2n;
    let ans = 0;
 
    if(K == 1){
        if(N == 1){
            ans = 1;
        }else{
            ans = 0;
        }
    }else{
        if(N == 1){
            ans = K % mod;
        }else if(N == 2){
            ans = a % mod;
        }else{
            
            let c = 1n;
            while(n != 0n){
                if(n % 2n == 1n){
                    c = c * b;
                }

                b = b * b % mod;
                n /= 2n;
            }
            
            ans = (a % mod * c) % mod;
        }
    }
    
    console.log(String(ans)); 
 
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));