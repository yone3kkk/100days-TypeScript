# TypeScript 基本型ハンズオン

TypeScriptを学ぶ最大のメリットは、**型があることで、書いている最中にミスに気づけること**です。

このページでは次の基本型を実際にコードを書きながら学びます。

- string
- number
- boolean
- array
- tuple
- any

---

## 1. string, number, boolean

まずは基本の3セットです。

```ts
let userName: string = "Taro";
let age: number = 20;
let isStudent: boolean = true;

console.log(userName, age, isStudent);
```

### 試してみるポイント

- `userName` に数値を入れるとエラーになります。
- `age` に文字列を入れるとエラーになります。
- `isStudent` に `"yes"` のような文字列を入れるとエラーになります。

TypeScriptは、こうした型の不一致を実行前に教えてくれます。

---

## 2. array（配列）

配列にも型をつけられます。

```ts
let scores: number[] = [80, 92, 75];
let fruits: string[] = ["apple", "banana", "orange"];

console.log(scores);
console.log(fruits);
```

### 試してみるポイント

- `scores` に `"100"` を入れるとエラーになります。
- `fruits` に `123` を入れるとエラーになります。

配列の要素型を決めることで、混在ミスを防げます。

---

## 3. tuple（タプル）

タプルは、**要素数と順番ごとの型**を固定した配列です。

```ts
let userInfo: [string, number] = ["Hanako", 25];

console.log(userInfo[0]); // string
console.log(userInfo[1]); // number
```

### 試してみるポイント

- `[25, "Hanako"]` のように順番を入れ替えるとエラーになります。
- 要素数が増減してもエラーになります（定義と一致しないため）。

「1番目は名前、2番目は年齢」のように、データの形を厳密にしたいときに有効です。

---

## 4. any型（禁断の型）

`any` は何でも入る型です。

```ts
let value: any = "hello";
value = 123;
value = true;

console.log(value);
```

`any` を使うと一見便利ですが、TypeScriptの型チェックが弱くなります。
そのため、`any` の多用は避けるのが基本です。

- どうしても型が決められない一時的な場面だけ使う
- 使ったら後で具体的な型に置き換える

---

## まとめ

- `string`, `number`, `boolean` は基本の3セット
- `array` は `number[]`, `string[]` のように要素型を決める
- `tuple` は要素数と順番ごとの型を固定できる
- `any` は便利だが型安全を下げるため、必要最小限にする

次のステップとして、`day2/type.ts` に上記コードを1つずつ書いて、わざと型エラーを出して確認してみましょう。
