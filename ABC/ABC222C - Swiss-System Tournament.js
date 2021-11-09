function Main(input) {
    input = input.split(/[\s\n]/);
    var n = parseInt(input[0], 10);
    var r = parseInt(input[1], 10);
    var hands = [];
    var ranking = [];
    var judge = 0;

    for(var i = 0; i < 2*n; i++){
        hands[i] = input[i+2].split("");//hands[id][round]

        ranking[i] = [i, 0];//ranking[id][score]
    }

    for(var round = 0; round < r; round++){
        for(i = 0; i < 2*n; i=i+2){
            judge = handsCompare(hands[ranking[i][0]][round], hands[ranking[i+1][0]][round]);
            if(judge === 1){
                ranking[i+1][1] ++;
            }else if(judge === 2){
                ranking[i][1] ++;
            }
        }
      
      	ranking.sort(function(a,b){
          	return a[0] - b[0];
        })
        ranking.sort(function(a,b){
            return b[1] - a[1];
  
        })
    }  

    function handsCompare(a, b){
        if((a === "C" && b === "G") || (a === "P" && b === "C") || (a === "G" && b === "P")){
            return 1;
        }else if((a === "G" && b === "C") || (a === "C" && b === "P") || (a === "P" && b === "G")){
            return 2;
        }else{
            return 3;
        }
    }

    for(i = 0; i < 2*n; i++){
        console.log(ranking[i][0]+1);
    }
    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));