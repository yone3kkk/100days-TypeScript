# TypeScript 関数と型のハンズオン

C言語では関数の戻り値や引数に型を書くのが当たり前でしたが、TypeScriptでもその感覚が非常に役立ちます。

本ページでは、以下のトピックを実践しながら学びます。

- 引数の型定義
- 戻り値の型定義
- void 型
- Optional Parameters（オプショナルパラメータ）

---

## 1. 引数の型定義

関数に渡す値に型を制限できます。

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("Taro");        // OK
greet(123);           // エラー: number は string ではない
greet();              // エラー: 引数が足りない
```

**ポイント:**
- name の後に `: string` を書く
- これにより「文字列以外を渡すとエラー」になる
- C言語の `void greet(char *name)` と同じ感覚

---

## 2. 戻り値の型定義

関数が何を返すかを明示できます。

```ts
function add(a: number, b: number): number {
  return a + b;
}

const result: number = add(10, 20);  // OK
console.log(result);                  // 30
```

**ポイント:**
- `)` の後に `: number` を書く
- 関数本体の return で指定型の値が返さているか TypeScript がチェック
- 戻り値がない場合は `: void`

---

## 3. void 型

何も返さない関数に使う型です。C言語と同じですね。

```ts
function logMessage(message: string): void {
  console.log(message);
  // return を書かないか、return; だけ
}

logMessage("This is a test");  // OK
```

**ポイント:**
- 戻り値がない = `: void`
- 型チェック時に、誤って return を書かないかチェックされる

---

## 4. 複数の引数を持つ関数

各引数に型を付けます。

```ts
function calculateSum(nums: number[]): number {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

console.log(calculateSum([10, 20, 30]));  // 60
console.log(calculateSum([]))               // 0
```

**ポイント:**
- 配列でも型指定可能

別の例：

```ts
function displayUserInfo(name: string, age: number, isStudent: boolean): void {
  console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
}

displayUserInfo("Taro", 20, true);      // OK
displayUserInfo("Hanako", 25, false);   // OK
displayUserInfo("Jiro", "19", true);    // エラー: 2番目の引数は number
```

---

## 5. Optional Parameters（オプショナルパラメータ）

引数があってもなくても良い場合に `?` を使います。

```ts
function greetOptional(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, stranger!");
  }
}

greetOptional("Taro");    // Hello, Taro!
greetOptional();          // Hello, stranger!
```

**ポイント:**
- `name?` の `?` で「あってもなくてもOK」
- ない場合、値は `undefined`

別の例：

```ts
function createUser(name: string, age: number, city?: string): void {
  if (city) {
    console.log(`${name}, ${age} years old, lives in ${city}`);
  } else {
    console.log(`${name}, ${age} years old`);
  }
}

createUser("Taro", 20, "Tokyo");      // Taro, 20 years old, lives in Tokyo
createUser("Hanako", 25);             // Hanako, 25 years old
```

**型安全性:**

optional で受け取った値は `: string | undefined` になるので、使う前に存在確認が必要です。

```ts
function printLength(str?: string): void {
  // console.log(str.length);  // エラー: str が undefined かもしれない
  
  if (str) {
    console.log(str.length);   // OK: ここで str は string
  }
}
```

---

## 6. デフォルト値

optional パラメータにデフォルト値を設定できます。

```ts
function greetWithDefault(name: string = "Guest"): void {
  console.log(`Hello, ${name}!`);
}

greetWithDefault("Taro");    // Hello, Taro!
greetWithDefault();          // Hello, Guest!
```

**ポイント:**
- `name: string = "Guest"` でデフォルト値を指定
- 引数を省略すると、デフォルト値が使われる

---

## 7. 関数の型注釈（参考）

関数そのものに型を付けることもできます。

```ts
// パターン1: 型注釈あり
const add: (a: number, b: number) => number = function(a, b) {
  return a + b;
};

// パターン2: アロー関数
const multiply: (x: number, y: number) => number = (x, y) => x * y;

console.log(add(10, 5));         // 15
console.log(multiply(4, 3));     // 12
```

補足：最初はこの書き方は難しければ、通常の関数定義で十分です。

---

## 8. まとめ

|要素|説明|
|---|---|
|引数の型|function add(a: **number**, b: number)|
|戻り値の型|function add(a: number, b: number): **number**|
|void 型|何も返さない関数 `: void`|
|Optional|`?` を使って「あってもなくても良い」を表現|
|デフォルト値|`param: type = defaultValue` のように指定|

---

## 9. 実装チェックリスト

今日実装するときに確認すること：

- [ ] 関数の全引数に型を付けた
- [ ] 関数の戻り値に型を付けた
- [ ] void 型の関数では戻り値がないことを確認した
- [ ] optional 引数には `?` をつけた
- [ ] optional 引数を使う前に undefined チェックをした
- [ ] 型エラーに対して、意図的なのか確認した

---

## 10. 実装練習用ファイル

`functions.ts` を同じフォルダに作成して、以下の関数を書いて試してください：

1. 2つの数値を受け取り、足し算結果を返す関数
2. 文字列を受け取り、コンソール出力する（void）関数
3. 名前と年齢（オプション）を受け取り、ユーザー情報を表示する関数
4. 配列の平均値を計算する関数

