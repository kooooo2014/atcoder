// 問題文  ==============================================
// 
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let [L, R] = input[0].split(" ");
    const mod = 10n**9n+7n;
    let lLength = L.length;
    let rLength = R.length;

    L = BigInt(L);
    R = BigInt(R);
    lLength = BigInt(lLength);
    rLength = BigInt(rLength);

    let ans = 0n;
    let l = ((L-1n) * L / 2n) * lLength;
    let r = (R * (R+1n) / 2n) * rLength;

    for(let i = lLength; i < rLength; i++){
        ans -= ((10n**i - 1n) * (10n**i) / 2n);
    }
    ans += r;
    ans -= l;

    console.log(String(ans % mod));

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));