'use strict';
function Main(input) {
    input = input.split("\n");
    let [n, m] = input[0].split(" ").map(e => parseInt(e, 10));;
    let b = [];
    let i = 0;
    let j = 0;
    
    for(i = 0; i < n; i++){
        b[i] = input[i+1].split(" ").map(BigInt);
    }
    
    for(i = 0; i < n; i++){
        for(j = 0; j < m; j++){

            if((b[i][j] - b[0][0] != (i * 7) + j)){             
                console.log("No", (b[i][j] / 7n));
                return
            }
        }
        let check = (b[0][0] + n - 1) / 7n
        if(check > 7 * i - j + 1) {

            console.log(check , 7 * (i+1));
            console.log("No");
            return
        }       
    }
    console.log("Yes")
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));