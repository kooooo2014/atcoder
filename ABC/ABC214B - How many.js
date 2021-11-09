function Main(input) {
    input = input.split(" ")
    a = parseInt(input[0], 10)
    b = parseInt(input[1], 10)

    var count = 0

    for(var i = 0; i <= input[0]; i++){
        for(var j = 0; j <= input[0] - i; j++){
            for(var k = 0; k <= input[0] - i - j; k++){
                if(input[0] >= i + j + k && input[1] >= i*j*k){
                    count ++
                }
            }
        }
    }

    console.log(count)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));