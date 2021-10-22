function Main(input) {
    input = input.split("\n");

    var contests = ["ABC", "ARC", "AGC", "AHC"];
    var judge = [true, true, true, true];


    for(var i = 0; i < 3; i++){
        for(var j = 0; j < contests.length; j++){
            if(input[i] === contests[j]){
                judge[j] = false;
            }
        } 
    }

    for(j = 0; j < contests.length; j++){
        if(judge[j]){
            console.log(contests[j]);
            break;
        }
    } 

    
  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));