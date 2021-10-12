function Main(input) {
    input = input.split(" ");
    var a = parseInt(input[0], 10);
    var b = parseInt(input[1], 10);
  var seki = a * b;
    if(seki % 2 === 0) {
    console.log("Even");
  }else{
    console.log("Odd");
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));