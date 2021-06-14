/**
 * const let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // val変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letも上書きが可能
// val2 = "let変数を上書き!";
// console.log(val2);

// // letは再宣言が不可能
// let val2 = "let変数の再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";
// const val3 = "const変数の再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ゆうた",
//   age: 28,
// };
// console.log(val4);
// val4.name = "YUYUUTA";
// console.log(val4);

// // constで定義したオブジェクトはプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

// /**
//  * テンプレート文字列(文字列の中にJSの変数を埋め込めるイメージ)
//  */
// const name = "ゆゆうた";
// const age = 28;
// // 私の名前はゆゆうたです。年齢は28歳です。

// // 従来の方法 結合のたびに書かなきゃならず読みづらい
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法(バッククォートを使う)
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "ゆゆうた",
//   age: 28,
// };

// // 毎回myProfileを書いていかなきゃならないのは読みづらい...
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);
// // 分割代入を使うとオブジェクトから指定のプロパティを抜き出すことができる
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["ゆゆうた", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 *  デフォルト値、引数など
 */
// const sayHello = (name = "田所浩二") => console.log(`こんにちは！${name}さん。`);
// sayHello();

/**
 * スプレッド構文 ...という書き方
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1); // [1,2]
// // console.log(...arr1); // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる場合
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、配列の結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// // // コピー
// const arr6 = [...arr4];
// console.log(arr6);

// arr6[0] = 999;
// console.log(arr6);
// console.log(arr4);
// // 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // = でコピーしたらどうなるの? -> 参照も引き継がれてしまい元の配列にも影響する(参照渡し)
// const arr8 = arr4;
// arr8[0] = 999;
// console.log(arr8);
// console.log(arr4);

/**
 * map や filter を使った配列の処理
 */
// 従来の配列に対する処理
// const nameArr = ["三浦", "木村", "田所"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です。`);
// }
// mapは中身が1つずつ引数として入ってくる
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// mapの2番目の引数を設定してあげるとインデックスが格納される
// nameArr.map((name, index) => console.log(`${index + 1}番目の人物は${name}です`));

// filter:条件に一致したものだけの新しい配列を作る
// const numArr = [1, 2, 3, 4, 5];
// // return文には条件式を書く。
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// 配列を書く中で、何番目の要素かを意識することがある。

// 田所以外には「さん」をつけるプログラムを書いてみよう
// const newNameArr = nameArr.map((name) => {
//   if(name === "田所") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 参考演算子(ES6独自の機能ではないです)
 */
// ある条件 ? trueの時 : falseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString()); //金額表示の時のように3桁区切りしてくれる

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!' : '許容範囲内です。'
// }
// console.log(checkSum(50, 60));

/**
 * 論理演算氏の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if(flag1 && flag2) {
//   console.log("1も2もtrueです");
// }

// || は、左側がfalseなら、右側を返すという扱い。JSではnullはfalse判定される。
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は、左側がtrueなら、右側を返す。つまり左がfalseなら左がそのまま返される。
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
