//複数種類の文字のsplit
input = input.split(/[\s\n]/)

//int変換(10進数)
var k = parseInt(input[0], 10);

//for文
for(var i = 0; i< a.length ; i++){
    
}

//累乗
a ** b

//絶対値
Math.abs(a - b);

//sort
array.sort(function(a, b) {
    return a-b;
});

//iのjビット目が0ならば
if((i & (1 << j)) == 0){
     
}

//<探索>
    //bit全探索
    for(let i = 0; i < (1 << n); i++){
        let candidate = "";

    }

    //2分木探索
    function binary_search(key) {
        let searchLeft = 0;
        let searchRight = a.length - 1;
        let half;
        
        while (searchLeft <= searchRight) {        
            half = Math.ceil((searchRight + searchLeft) / 2);

            if (key < a[half]) {
                searchRight = half;
            } else if (key > a[half]) {
                searchLeft = half;
            } else if (key == a[half]) {

                return;
            }
        }
    }




//<型変換>
    //基本
    BigInt()
    Number()
    String()

    // は配列をすべてnumber型に
    array.map(e => parseInt(e, 10));
    let a = input[1].split(" ").map(e => parseInt(e, 10));


// <出力>
    //ABC~出力
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    //配列を\s区切りで出力
    console.log(array.join(" "));







