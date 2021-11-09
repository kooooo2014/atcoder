function Main(input) {
    input = input.split("\n");
    var a = input[1].split(" ");
    var aSum = BigInt(0);
    
    for (var i = 0; i < a.length; i++){
        a[i] = BigInt(parseInt(a[i], 10));
        aSum += a[i];
    }
  
    var x = BigInt(input[2], 10);
    var syou = BigInt(Math.floor(Number(x) / Number(aSum)));
    var count = BigInt(syou  * BigInt(i));
    var sum = BigInt(syou * aSum);

    for(i = 0; i< a.length ; i++){
        if(sum > x){
            break;
        }
      
        sum += a[i];
        count ++;

        if(i === a.length - 1){
            i = 0;
        }
        
    }
    
    console.log(String(count));  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));