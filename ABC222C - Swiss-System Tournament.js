function Main(input) {
    input = input.split(/[\s\n]/);
    var people = parseInt(input[0], 10);
    var limitScore = parseInt(input[1], 10);
    var scores = [];
    var ng = 0;


    for(var i = 0; i < people; i++){
        scores[i] = parseInt(input[i+2], 10);
        if(scores[i] < limitScore){
            ng ++;
        }
    }  

    console.log(ng);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));