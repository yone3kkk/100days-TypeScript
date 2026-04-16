// string literal type 
// 特定の「文字列」のみを許容する型を定義することができる
let direction : 'up' | 'down' | 'left' | 'right';

direction = 'up';
direction = 'down';
direction = 'left';
direction = 'right';
// direction = 'forward'; // forwardはリテラル型ではないためエラーになる

const move = (distance: number, direction: 'up' | 'down' | 'left' | 'right') : void => {
  console.log(`Moving ${distance} units ${direction}`);
};
move(10, 'up');

// numeric literal type
// 特定の「数値」のみを許容する型を定義することができる
let binaryDigit : 0 | 1;

binaryDigit = 0; // valid
binaryDigit = 1; // valid
// binaryDigit = 2; // 2はリテラル型ではないためエラーになる


// リテラル型とユニオン型を組み合わせることで、
// 特定の文字列や数値の集合を表現することができる
// 例えば、HTTPメソッドを表すリテラル型を定義することで、
// 安全にHTTPリクエストを行うことができるようになる
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const request = (url: string, method: HttpMethod) : void => {
  console.log(`${method} ${url}`);
}

request("/users", "GET");
// request("/users", "FETCH"); // NG