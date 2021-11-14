function Main(input) {
    input = input.split('\n');
    var map=[] ;
    for(var i = 0; i < input.length-2; i++){
        map[i] = input[i + 1].split(" ");
    }

    var i1 = 0;
    var i2 = 0;
    var j1 = 0;
    var j2 = 0;
    for(i1 = 1; i1 < map.length; i1++){
        for(i2 = i1+1; i2 < map.length+1; i2 ++){
            for(j1 = 1; j1 < map[0].length; j1++){
                for(j2 = j1+1; j2 < map[0].length+1; j2 ++){
                    if(!compareMap(i1, i2, j1, j2)){
                        console.log("No")
                        return
                    }
                }
            }
        }
    }

    console.log("Yes")

    function compareMap(i1, i2, j1, j2){
        var a = Number(map[i1-1][j1-1]) + Number(map[i2-1][j2-1])
        var b = Number(map[i2-1][j1-1]) + Number(map[i1-1][j2-1])

        return(a <= b);
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));