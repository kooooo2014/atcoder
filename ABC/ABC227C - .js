'use strict';
function Main(input) {
    const N = BigInt(input);

    let A = 0;
    let B = 0;
    let C = 0;
    let count = 0n;

    for(let a = 1n; a <= N; a++){
        for(let b = N/2n; a*b <= N && a <= b; b--){
            let c = N / (a*b);

            if(c >= b){
                count += (c-b+1n);
                // console.log(a,b,c)
            }
                
        }
    }
    
    

    console.log(String(count));  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));