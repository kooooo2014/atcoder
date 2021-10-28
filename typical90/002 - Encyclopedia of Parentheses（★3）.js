// 問題文 ==============================================
// 長さ N の正しいカッコ列をすべて、辞書順に出力してください。

// ただし、正しいカッコ列は次のように定義されています :

// () は正しいカッコ列である
// S が正しいカッコ列であるとき、文字列 ( +S+ ) は正しいカッコ列である
// S,T が正しいカッコ列であるとき、文字列 S+T は正しいカッコ列である
// それ以外の文字列はすべて、正しいカッコ列でない
// 例えば、

// ()()
// (()())(())
// ()()()()()()()()
// は正しいカッコ列ですが、

// )(
// )))()(((
// ((((a))))
// は正しいカッコ列ではありません。

// また、 ( の方が ) よりも辞書順で早いものとします。
// ==============================================
'use strict';
function Main(input) {
    let n = parseInt(input, 10);

    //bit全探索
    for(let i = 0; i < (1 << n); i++){
        let candidate = "";

        for(let j = n-1; j >= 0; j--){
            if((i & (1 << j)) == 0){
                candidate += "(";
            }else{
                candidate += ")";
            }
        }

        if(check(candidate)){
            console.log(candidate);
        }
    }    
}

function check(str){
    let count = 0;
    for(let k = 0; k < str.length; k++){
        if(str[k] == "("){
            count ++;
        }else if(str[k] == ")"){
            count --;
        }
        if(count < 0){
            return false;
        }
    }
    if (count == 0){
        return true;
    }
    return false;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));