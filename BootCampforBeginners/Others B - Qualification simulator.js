// 問題文  ==============================================
// CODE FESTIVAL 2016の予選にはN人が参加しました。参加者は、国内の学生であるか、
// 海外の学生であるか、どちらでもないかのどれかです。

// 予選は国内または海外の学生のみが通過することができ、上位の学生から順に、
// 以下の条件を満たすときに通過します。学生でない参加者は予選を通過できません。

// 国内の学生は、現在予選の通過が確定した参加者がA+B人に満たなければ、予選を通過する
// 海外の学生は、現在予選の通過が確定した参加者がA+B人に満たず、さらに海外の学生の中での順位がB位以内なら、予選を通過する

// 参加者の情報を表す文字列Sが与えられます。 
// Sのi文字目がaのとき予選でi位の参加者が国内の学生であることを、 
// Sのi文字目がbのとき予選でi位の参加者が海外の学生であることを、 
// Sのi文字目がcのとき予選でi位の参加者がそのどちらでもないことを表しています。

// すべての参加者について、上位から順に、予選を通過した場合はYes、
// そうでない場合はNoを出力するプログラムを作成してください。
// ==============================================
'use strict';
function Main(input) {
    input = input.split("\n");
    const [N, A, B] = input[0].split(" ").map(e => parseInt(e, 10));
    let S = input[1].split("");
    let countA = 0;
    let countB = 0;
    let count = A + B;;

    for(let i = 0; i < N; i++){
        if(S[i] == "c"){
            console.log("No");
            continue;
        }
        
        if((S[i] == "a") && (countA + countB < count)){
            console.log("Yes");
            countA ++;
            continue;
        }

        if((S[i] == "b") && (countB < B) && (countA + countB < count)){
            console.log("Yes");
            countB ++;
            continue;
        }

        console.log("No");
    }
    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));