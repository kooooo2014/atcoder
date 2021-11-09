function Main(input) {
    input = input.split("\n");
  var kazu = input[1].split(" ");
  var count_even = 0;
    
    for(let i = 0; i < kazu.length; i++){
    kazu[i] = parseInt(kazu[i], 10); 
  }
    
    counts(kazu);
    
    function counts(kazu){   
    for(let i = 0; i < kazu.length; i++){
      if(kazu[i] % 2 !== 0){
        return;
      }else{
        kazu[i] = kazu[i] / 2; 
        if(i+1 === kazu.length){
          count_even ++;
          counts(kazu);
        }
      }
    }
  }
  counts(kazu);
  console.log(count_even);
    
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));