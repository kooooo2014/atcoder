//<型変換>
    //基本
    BigInt()
    Number()
    String()

    input = input.split(" ").map(BigInt);

    //int変換(10進数)
    var k = parseInt(input[0], 10);

    //文字列（８進数）
    let n = '0o' + N;

    // は配列をすべてnumber型に
    array.map(e => parseInt(e, 10));
    let a = input[1].split(" ").map(e => parseInt(e, 10));

    //複数種類の文字のsplit
    input = input.split(/[\s\n]/)

    
//配列生成し、その配列すべてにtrueを入れる(n*n行列)
let s = Array.from(new Array(n), () => new Array(n).fill(true));

//for文
for(var i = 0; i< a.length ; i++){
    
}

//文字列中の８の個数を返す
count = ( String(N9).match( /8/g ) || [] ).length;

//文字列中の8を5に変える
for(let i = 0; i < count; i++){
    array = array.replace("8", "5");
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
    //対象配列中に答えが必ずある場合↑

    //対象配列中に答えがない可能性がある場合↓
    // typical90-076
    






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


//<順列を生成する関数 n!>
function next_permutation(arr) {
    const len = arr.length;
    let left = len - 2;
    while (left >= 0 && arr[left] >= arr[left+1]) left--;
    if (left < 0) return false;
    let right = len - 1;
    while (arr[left] >= arr[right]) right--;
    { const t = arr[left]; arr[left] = arr[right]; arr[right] = t; }
    left++;
    right = len - 1;
    while (left < right) {
        { const t = arr[left]; arr[left] = arr[right]; arr[right] = t; }
        left++;
        right--;
    }
    return true;
}
//順列の使用例
//（10 20 30 40）の順列を生成してるやつ
const len = 4;
const arr = [];
for (let i = 0; i < len; i++) arr.push(10 * (i+1));
do {
    let str = "";
    for (let i = 0; i < len; i++) str += " " + arr[i];
    console.log(str);
} while (next_permutation(arr));


//組み合わせ
function combination(nums, k){
    let ans = [];
    if (nums.length < k) {
        return []
    }
    if (k === 1) {
        for (let i = 0; i < nums.length; i++) {
            ans[i] = [nums[i]];
        }
    } else {
        for (let i = 0; i < nums.length - k + 1; i++) {
            let row = combination(nums.slice(i + 1), k - 1);
            for (let j = 0; j < row.length; j++) {
                ans.push([nums[i]].concat(row[j]));
            }
        }
    }
    return ans;
}

//組み合わせの使用例
let arr = combination(['a', 'b', 'c'], 2)
console.log(JSON.stringify(arr))
// [["a","b"],["a","c"],["b","c"]]

//素因数分解
function pf(n) {
    var result = [];

    if (n === 1) {
        return [1];
    }

    var init = 2;

    while ( n !== 1 ) {
        var i = init;
        while (i < Number.MAX_SAFE_INTEGER) {
            if (n % i == 0) {
                result.push(i)
                n /= i;
                break;
            }
            i++;
        }
        init = i;
    }
    return result;
}

console.log(JSON.stringify(pf(1)))
console.log(JSON.stringify(pf(4)))
console.log(JSON.stringify(pf(27)))
console.log(JSON.stringify(pf(972439611840)))
// [1]
// [2,2]
// [3,3,3]
// [2,2,2,2,2,2,3,3,3,5,103,103,103,103]
// 素数の個数をカウントする↓
// typical90 075

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









