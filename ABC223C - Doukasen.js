function Main(input) {
    input = input.split("\n");
    const n = parseInt(input[0], 10);
    let sen = [];
    let a = [];
    let b = [];
    let t = 0;
    let ans = 0;

    for(let i = 0; i < n; i++){
        sen[i] = input[i+1].split(" ").map(e => parseInt(e, 10)); 
        a[i] = sen[i][0];
        b[i] = sen[i][1];
        t += a[i] / b[i];
    }
    t /= 2;

    for(let i = 0; i < n; i++){
        ans += Math.min(a[i], t * b[i]);
        t -= Math.min(a[i]/b[i], t)
    }

    console.log(ans);
    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));