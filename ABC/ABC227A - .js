'use strict';
function Main(input) {
    const[N, K, A] = input.split(" ").map(e => parseInt(e, 10));
    
    let card = A + K - 1;
    // let card = K - (N-A+1) = A + K - 1 - N;
    let a = card % N;
    console.log(card)

    if(a == 0){
        console.log(N);
    }else{
        console.log(a);
    }
    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));