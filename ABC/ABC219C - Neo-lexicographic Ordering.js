function MainC(input){
    const arr = input.split('\n');
    const X = arr.shift();// 0の数値から始まる辞書として使える
    const N = arr.shift();
    arr.sort((a, b) => {
        const len_a = a.length;
        const len_b = b.length;
        const min = Math.min(len_a, len_b);
        for(let i=0; i<min; i++) {
            if(a[i] !== b[i]) {
                return X.indexOf(a[i]) - X.indexOf(b[i]);
            }
        }
        // 文字列がすべて同じなら、文字数が短いほうが前になる
        return len_a - len_b;
    });
    console.log(arr.join('\n'));
}
MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());