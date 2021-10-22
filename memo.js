//複数種類の文字のsplit
input = input.split(/[\s\n]/)

//累乗
a ** b

//型変換
BigInt()
Number()
String()

//ABC~出力
var startStr="A";
var endStr="Z";
for(var i=startStr.charCodeAt(0);i<=endStr.charCodeAt(0);i++){
    document.write(String.fromCharCode(i));
}

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");