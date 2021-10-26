function Main(input) {
    input = input.split("\n");
    var points = [];
    for(var i = 0; i < input.length-2; i++){
        points[i] = input[i+1].split(" ")
        points[i][0] = BigInt(points[i][0])
        points[i][1] = BigInt(points[i][1])
    }

    var count = 0;

    for(i = 0; i < points.length; i++){
        for(var j = i+1; j < points.length; j++){
            for(var k = j+1; k < points.length; k++){
                if(judgeS(points[i][0], points[i][1], points[j][0], points[j][1], points[k][0], points[k][1])){
                    count++
                }
            }
        }
    }
    
    

    console.log(count);  

    function judgeS(x1, y1, x2, y2, x3, y3){
        s = (x1-x3)*(y2-y3) - (x2-x3)*(y1-y3)
        return s > 0 || s < 0
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));