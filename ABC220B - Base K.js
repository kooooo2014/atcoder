function Main(input) {
    input = input.split(/[\s\n]/);
    var k = parseInt(input[0], 10);
    var a = input[1].split("");
    var b = input[2].split("");
    var ak = bk = 0;
    

    for(var i = 0; i< a.length ; i++){
        ak += parseInt(a[i], 10) * (k ** (a.length - i - 1));
    }

    for(i = 0; i< b.length ; i++){
        bk += parseInt(b[i], 10) * (k ** (b.length - i - 1));
    }
    

    console.log(ak * bk);  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));