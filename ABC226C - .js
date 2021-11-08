'use strict';
function Main(input) {
    input = input.split("\n");
    let N = parseInt(input[0], 10);
    let skill = [];
    let times = [];
    for(let i = 1; i < N+1; i++){
        skill[i] = input[i].split(" ");
        times[i] = skill[i].shift();
        times[i] = BigInt(times[i]);
        skill[i] = skill[i].map(e => parseInt(e, 10));
    }

    let timeSum = [];
    timeSum.map(BigInt);
    let addBool = Array.from(new Array(N).fill(false));

    for(let i = 1; i < N+1; i++){
        timeSum[i] = times[i];
        for(let j = 0; j < skill[i][0]; j++){
            let t = BigInt(skill[i][j+1]);
            if(addBool[Number(t)-1] == false){
                timeSum[i] += timeSum[t]
                addBool[Number(t)-1] = true;
                
            }
            
                    
        }
    }
    console.log(timeSum)

    console.log(String(timeSum[N]));  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));