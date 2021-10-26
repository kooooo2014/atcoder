function Main(input) {
    input = input.split("");
    re = input.reverse();

    if(re[1]==="r" && re[2] === "e") {
        console.log("er")
    }else if(re[1]==="t" && re[2]==="s" && re[3] === "i"){
        console.log("ist")
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));