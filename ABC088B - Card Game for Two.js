function Main(input) {
    input = input.split("\n");
    var cards = input[1].split(" ");

    var alice = 0;
    var bob = 0;

    for(var i = 0; i < cards.length; i++){
        cards[i] = parseInt(cards[i], 10);
    }

    cards.sort(function(a, b) {
        return b-a;
    });

    for(var j = 0; j < cards.length; j++){
      if(j % 2 === 0) {
            alice += cards[j];
      }else{
            bob += cards[j];
      }     
    }
    console.log(alice - bob);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));