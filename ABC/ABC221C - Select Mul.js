function Main(input) {
    input = input.split("");
  	var tmp = [];
    for (var i = 0; i < input.length - 1; i++){
        tmp[i] = parseInt(input[i], 10);
    }

    var n = tmp.sort(function(a, b){
        return b-a;
    })

    var a = []; //a*b
    var b = [];
    var aj = 0; //添え字
    var bj = 0; //添え字
    

    for(i = 0; i < n.length; i++){ 
        if(parseInt(a.join(""), 10) <= parseInt(b.join(""), 10) || aj === 0 && bj === 0){
            a[aj] = n[i];
            aj++;
        }else{
            b[bj] = n[i];
            bj++;
        }    
    }
  	
    console.log(a.join("") * b.join(""));
    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));