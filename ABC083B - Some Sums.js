function Main(input) {
    input = input.split(" ");
    var n = parseInt(input[0], 10);
    var a = parseInt(input[1], 10);
    var b = parseInt(input[2], 10);
    var iString;
    var sum = 0;
    var ans = 0;

    for(var i = 1; i < n+1; i++){
      iString = i.toString();
      for(var j = 0; j < iString.length; j++){
        sum += parseInt(iString[j]);
      }
      if(a <= sum && sum <= b) {
            ans += i;
      }
      sum = 0;
     
    }
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));