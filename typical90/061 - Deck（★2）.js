// 問題文  ==============================================
// 
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    let Q = parseInt(input[0],10);
    let sousa = [];
    let array = [];
    for(let i = 0; i < Q; i ++){
        sousa[i] = input[i+1].split(" ").map(e => parseInt(e, 10));
        if(sousa[i][0] == 1){
            array.unshift(sousa[i][1]);
        }else if(sousa[i][0] == 2){
            array.push(sousa[i][1]);
        }else{
            console.log(array[sousa[i][1]-1]);
        }   
    }
    
    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));