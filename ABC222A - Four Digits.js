function Main(input) {
    input = input.split("");
    if(input.length === 2){
      console.log("000"+input[0]);
    }else if(input.length === 3){
      console.log("00"+input[0]+input[1]);
    }else if(input.length === 4){
      console.log("0"+input[0]+input[1]+input[2]);
    }else{
      console.log(input[0]+input[1]+input[2]+input[3]);
    }    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));