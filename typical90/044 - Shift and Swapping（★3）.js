// 問題文  ==============================================
//長さ N の整数列 {An} が与えられます。以下の Q 個のクエリを順に処理してください。
// Ti =1 のとき: 数列の第 x 項 (=Ax ) の値と第 y 項 (=Ay ) の値を入れ替える。
// Ti =2 のとき: 数列を右方向にシフトする。すなわち、{An }=AN ,A1 ,A2 ,⋯,AN−1とする。
// Ti =3 のとき: 数列の第 x 項 (=Ax ) の値を求める。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    const [N,Q] = input[0].split(" ").map(e => parseInt(e, 10));
    let A = input[1].split(" ").map(e => parseInt(e, 10));
    const T = [];
    for(let i = 0; i < Q; i++){
        T[i] = input[i+2].split(" ").map(e => parseInt(e, 10));
    }
    

    // function RightShift(array){
    //     let tmp = [];
    //     tmp[0]= array.pop();
    //     array = tmp.concat(array);
    //     return array;
    // }

    function Swap(array, x, y, shift){
        let X = Math.abs((x-shift+N) % N);
        let Y = Math.abs((y-shift+N) % N);

        [array[X], array[Y]] = [array[Y], array[X]];
        // console.log(array[X], array[Y])
        return array;
    }

    function Output(array, x, shift){
        let X = Math.abs((x-shift+N) % N);
        console.log(array[X]);
        return;
    }

    let shift = 0;
    for(let i = 0; i < Q; i++){
        // console.log(A)
        if(T[i][0] == 1){
            Swap(A, T[i][1]-1, T[i][2]-1, shift);
        }else if(T[i][0] == 2){
            shift ++;
        }else{
            Output(A, T[i][1]-1, shift);
        }

    }


}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));