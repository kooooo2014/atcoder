function Main(input) {
    input = input.split("\n")

    for(i = 1; i < input.length; i++){
        for(var j = i+1; j < input.length; j++){
            if(input[i] === input[j]){
                console.log("Yes")
                return
            }
        } 
    }

    console.log("No")
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));