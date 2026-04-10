// letは再代入が可能である、つまるところ変数であることを意味する宣言である
// constは再代入が不可能であることを意味する宣言である
// 実務ではまず const を使い、必要な場所だけ let にするらしい

const userName: string = "Taro";
const age: number = 20;
const isStudent: boolean = true;

console.log(userName, age, isStudent);
console.log(`Name: ${userName}, Age: ${age}, Is Student: ${isStudent}`);

let scores: number[] = [80, 92, 75];
let fruits: string[] = ["Apple", "Banana", "Cherry"];

console.log(scores);
console.log(fruits);

// join()メソッドは配列の要素を指定した区切り文字で結合して文字列を作成する。
// 引数を与えないときは、デフォルトでカンマ（,）が区切り文字として使用される。
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Fruits: ${fruits.join(" | ")}`);

// push()メソッドは配列の末尾に要素を追加できる。
scores.push(88);
console.log(scores);
// 配列は添え字でアクセスすることができる。
scores[0] = 85;
console.log(scores);
// pop()メソッドは配列の末尾から要素を取り出して返すことができる
// 取り出した要素は配列から削除される。
scores.pop();
console.log(scores);
// dequeueは配列の先頭から要素を削除することを意味する。
// JavaScriptでは、shift()メソッドを使用して配列の先頭から要素を取り出して返すことができる。
// 取り出した要素は配列から削除される。
scores.shift();
console.log(scores);

