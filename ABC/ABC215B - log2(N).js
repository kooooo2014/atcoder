function Main(input) {
    var n = BigInt()

    for(var i = 0; i < n; i++){
        if(2 ** i > n){
            break;
        }
    }

    console.log(i - 1)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));