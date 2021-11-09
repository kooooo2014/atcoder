function Main(input) {
    input = input.split("");
    var count = 0;
    for(let i = 0; i < input.length; i++){
    if(input[i] === "1") count ++;
  }
    console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));