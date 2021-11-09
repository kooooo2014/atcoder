function Main(input) {
    input = input.split(" ");
    var a = parseInt(input[0], 10);
    var b = parseInt(input[1], 10);
    var c = parseInt(input[2], 10);
    var ans = -1;

    for(var i = 1; c*i <= b; i++){
        if(a <= c*i && c*i <= b){
            ans = c*i;
            break;
        }
    }
    

    console.log(ans);  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));