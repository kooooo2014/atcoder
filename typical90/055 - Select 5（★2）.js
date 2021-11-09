// 問題文  ==============================================
// 
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let [N, P, Q] = input[0].split(" ").map(BigInt);
    let a = input[1].split(" ").map(BigInt);
    
    for(let i = 0; i < N; i++){
        a[i] = a[i] % P;
    }

    let sum = 0n;
    let sum1 = 0n;
    let sum2 = 0n;
    let sum3 = 0n;
    let count = 0;
    for(let i = 0; i < N; i++){
        for(let j = i+1; j < N; j++){
            for(let k = j+1; k < N; k++){
                for(let l = k+1; l < N; l++){
                    for(let m = l+1; m < N; m++){
                        sum1 = (a[i]*a[j])% P;
                        sum2 = (a[k]*a[l])% P;
                        sum3 = (sum1*sum2)% P;
                        sum = sum3*a[m]% P;

                        if(sum == Q){
                            count++;
                        }
                    }
                }
            }
        }
    }
    console.log(count)

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));