function Main(input) {
    input = input.split(" ");
    for (var i = 0; i < input.length; i++){
        input[i] = parseInt(input[i], 10);
    }

    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var ans = "";

    for(i = 0; i < input.length; i++){
        ans += alphabet[input[i] - 1];
    }

    console.log(ans);
  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));