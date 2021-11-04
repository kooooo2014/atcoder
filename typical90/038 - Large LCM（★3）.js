// 問題文  ==============================================
//正整数 A, B が与えられます。A と B の最小公倍数を求めてください。
// ただし、答えが 10**18を超える場合は Large と出力してください。
// ==============================================
'use strict';
function Main(input) {
    const [A,B] = input.split(" ").map(BigInt);
    
    const gcd = function () {
        const f = (x, y) => y ? f(y, x % y) : x
        let ans = arguments[0]
        for (let i = 1; i < arguments.length; i++) {
            ans = f(ans, arguments[i]);
        }
        return ans
    }
    const maxG = gcd(A, B);

    const ans = (A / maxG) * (B / maxG) * maxG;
    
    if(ans > 10**18){
        console.log("Large")
    }else{
        console.log(String(ans))
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));