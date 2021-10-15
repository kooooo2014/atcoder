function Main(input) {
    input = input.split(" ");
    var n = parseInt(input[0], 10);
    var sumMoney = parseInt(input[1], 10);
    var countMoney = 0;
    var a = -1;
    var b = -1;
    var c = -1;

    for(var i = 0; i < n+1; i++){
        for(var j = 0; j < (n-i)+1; j++){
            var k = n-i-j;
            countMoney = (i*10000) + (j*5000) + (k*1000);
          	if(countMoney === sumMoney){
              a = i;
              b = j;
              c = k;
            }
        }
    }

    console.log(a, b, c);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));