// 問題文  ==============================================
// ABC 競技プログラミング塾には N 個のクラスがあり、番号 i (1≤i≤N) のクラスはレーティング Aiの生徒を対象としています。

// 今、Q 人の生徒がこの塾に入塾しようとしています。 番号 j (1≤j≤Q) の生徒のレーティングは Bjです。
// 各生徒は自分に合わないレベルのクラスに行くと不満になります。 各生徒について、その不満度は次のように定義されます。

// 対象レーティング a と自分のレーティング b の差の絶対値、すなわち ∣a−b∣
// j=1,2,3,…,Q それぞれについて、番号 j の生徒の不満度として考えられる最小値を求めてください。 
// ただし、1 人も入らないクラス、複数人から成るクラスがあっても良いものとします。
// ==============================================
'use strict';

function Main(input) {
    input = input.split("\n");
    let a = input[1].split(" ").map(e => parseInt(e, 10));
    let b = [];
    for(let i = 3; i < input.length - 1; i++){
        b[i-3] = 0;
        b[i-3] = parseInt(input[i], 10);
    }

    a.sort(function(a, b) {
        return a-b;
    }); 

    function binary_search(key) {
        let searchLeft = 0;
        let searchRight = a.length - 1;
        let half;
        
        while (searchLeft <= searchRight) {
            if(searchRight - searchLeft <= 1){
                if(Math.abs(a[searchRight] - key) < Math.abs(a[searchLeft] - key)){
                    console.log(Math.abs(a[searchRight] - key));
                    return;
                }else{
                    console.log(Math.abs(a[searchLeft] - key));
                    return;
                }
            }
            
            half = Math.ceil((searchRight + searchLeft) / 2);
            

            if (key < a[half]) {
                searchRight = half;
            } else if (key > a[half]) {
                searchLeft = half;
            } else if (key == a[half]) {
                console.log(0);
                return;
            }
        }
    }

    for(let i = 0; i < b.length; i++){
        binary_search(b[i]); 
    }
        
}



Main(require("fs").readFileSync("/dev/stdin", "utf8"));