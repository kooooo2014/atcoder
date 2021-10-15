function Main(input) {
    input = input.split(" ");
    var a = parseInt(input[0], 10);
    var b = parseInt(input[1], 10);
    var bai = 32**(a-b);
    console.log(bai);  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));