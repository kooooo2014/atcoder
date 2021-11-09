function Main(input) {
    input = input.split("\n");
    var s = input[0].split("");
    var t = input[1].split("");
    
    for(var i = 0; i < s.length - 1; i++){
        if(s[i] !== t[i]){
            [t[i], t[i+1]] = [t[i+1], t[i]];
            break;
        };  
    }

  
  
    if(s.join("") === t.join("")){
        console.log("Yes");  
    }else{
        console.log("No");
    }
    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));