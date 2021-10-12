function Main(input) {
    input = input.split("\n");
    var a = parseInt(input[0], 10);
    var b = parseInt(input[1], 10);
    var c = parseInt(input[2], 10);
    var sum = parseInt(input[3], 10);

    var count = 0;
    for(var i = 0;i < a+1; i++){
        for(var j = 0;j < b+1; j++){
            for(var k = 0;k < c+1; k++){
                if((500*i)+(100*j)+(50*k) === sum) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));