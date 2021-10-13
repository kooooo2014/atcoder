function Main(input) {
    input = input.split("\n");
	var mochis = [];
    var mochi = 1;

    for(var i = 1; i < input.length; i++){
        input[i] = parseInt(input[i], 10);
      	mochis[i-1] = input[i];
    }

    mochis.sort(function(a, b) {
        return a-b;
    });

    for(var j = 1; j < mochis.length; j++){
      if(mochis[j-1] < mochis[j] ) {
            mochi ++;
      }    
    }

    console.log(mochi);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));