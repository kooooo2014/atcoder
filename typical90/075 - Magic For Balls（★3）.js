// 問題文  ==============================================
// 整数 x が書かれたボールに対し、そのボールを叩くことによって以下の操作が行われます。

// x が素数でない場合：
// 叩かれたボールを消滅させ、整数 a が書かれたボールと整数 b が書かれたボールを追加する。
// a,b は ab=x かつ a≥2, b≥2 を満たす整数から自由に選ぶことができる。

// x が素数である場合：
// なにも起こらない。

// また、魔法を 1 回使うと、現在あるすべてのボールを同時に叩くことができます。
// 一方、魔法を使う以外の手段でボールを叩くことはできません。
// さて、整数 N が書かれたボールが 1 個だけあります。
// あなたは何回か魔法を使うことで、すべてのボールに書かれている数を素数にしたいです。
// 最小で何回の操作を行う必要がありますか？
// ==============================================
'use strict';
function Main(input) {
    const N = BigInt(input);

    function pf(n) {
        let result = 0n; 
    
        for(let i = 2n; i*i <= N; i++){
            if(n % i != 0){
                continue;
            }
            while (n % i == 0n) {
                result ++;
                n /= i;
            }
            
        }
        if(n != 1n){
            result ++;
        } 
        
        return result;
    }

    let sosu = pf(N);
    if(sosu == 1){
        console.log(0);
        return;
    }

    for(let i = 0; i < 40; i++){
        if(2**i < sosu && sosu <= 2 ** (i+1)){
            console.log(i+1);
            return;
        }
    } 
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));