'use strict';
function Main(input) {
    input = input.split("\n");
    let n = parseInt(input[0], 10);
    let ab = [];
    let checkNumber = 0;
    
    for(let i = 0; i < n-1; i++){
        ab[i] = input[i+1].split(" ").map(e => parseInt(e, 10));
    }

    if(ab[0][0] == ab[1][0]){
        checkNumber = ab[0][0];
    }else if(ab[0][1] == ab[1][0]){
        checkNumber = ab[0][1];
    }else if(ab[0][0] == ab[1][1]){
        checkNumber = ab[0][0];
    }else if(ab[0][1] == ab[1][1]){
        checkNumber = ab[0][1];
    }else {
        console.log("No");
        return;
    }

    for(let i = 2; i < n-1; i++){
        if((checkNumber != ab[i][0]) && (checkNumber != ab[i][1])){
            console.log("No")
            return;
        }
    }

    console.log("Yes")
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));