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

    input = input.split(" ").map(BigInt);

    // は配列をすべてnumber型に
    array.map(e => parseInt(e, 10));
    let a = input[1].split(" ").map(e => parseInt(e, 10));


// <出力>
    //ABC~出力
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    //配列を\s区切りで出力
    console.log(array.join(" "));


//<最大公約数を求める>
const gcd = function () {
    const f = (x, y) => y ? f(y, x % y) : x
    let ans = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        ans = f(ans, arguments[i]);
    }
    return ans
}
const maxG = gcd(a, b, c);

//Set()
const set = new Set();
set.add(x);
    //set[x]
set.clear();
    //要素すべて取り除く
set.delete(x);
    //xを取り除く
set.has(x);
    //xがあるか確認してtrue or falseを返す

//Map()
const map = new Map()
map.size   
    //mapオブジェクトのキーと値の組の数を返す
map.clear()
    //すべてのキーと値の組を返す
map.delete(key)
    //keyの要素が存在し、かつ削除できた場合にtrueを返す
map.has(key)
    //xがあるか確認してtrue or falseを返す
map.set(key, value)
    //keyで指定されたキーの値をvalueに設定し、mapオブジェクト自体を返す









