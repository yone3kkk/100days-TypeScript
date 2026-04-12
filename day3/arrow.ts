const greet = (name: string): void => console.log(`Hello, ${name}!`);

greet("Taro");

const add : (a: number, b: number) => number = function(a, b) {
    return a + b;
};

const result: number = add(10, 5);
console.log(result);

const dif : (a: number, b: number) => number = (a, b) => {
    return a - b;
};

const multiply: (x: number, y: number) => number = (x, y) => x * y;

console.log(multiply(4, 3));

// パターン 1: 関数宣言 + const
const add1 = function(a: number, b: number): number {
  return a + b;
};
// "const" 関数名 = "function"(引数: 型) : 返り値の型{
//  関数本体
// }

// !!これが現在のデフォルトの書き方!!
// 戻り値だけの関数定義の場合、パターン3の書き方となる
// パターン 2: Arrow 関数
const add2 = (a: number, b: number): number => {
  return a + b;
};
// "const" 関数名 = (引数: 型) : 返り値の型 =>{
//  関数本体
// }


// パターン 3: Arrow 関数（簡潔な書式）
const add3 = (a: number, b: number): number => a + b;
// "const" 関数名 = (引数: 型) : 返り値の型 => 関数本体


// パターン 4: 型アノテーション付き（明示的）
const add4: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
// "const" 関数名: (引数: 型) => 返り値の型 = (引数) => {
//  関数本体
// }


// パターン 5: 型推認（型を省略）
const add5 = (a: number, b: number) => a + b;
// "const" 関数名 = (引数: 型) => 関数本体