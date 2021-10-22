function Main(input) {
    input = input.split("\n");
    var s1 = input[0];
    var s2 = input[1];
    var s3 = input[2];
    var t = input[3].split("");
    for (var i = 0; i < t.length; i++){
        t[i] = parseInt(t[i], 10);
    }

    var ans;

    for(i = 0; i < t.length; i++){
        ans += input[t[i] - 1];
    }

    console.log(ans);

    
      
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));