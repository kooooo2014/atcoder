function Main(input) {
    input = input.split("\n");
    var a = parseInt(input[0], 10);

    if(0 <= a && a < 40){
        console.log(40 - a);
    }else if(40 <= a && a < 70){
        console.log(70 - a);
    }else if(70 <= a && a < 90){
        console.log(90 - a);
    }else if(90 <= a){
        console.log("expert");
    }
      
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));