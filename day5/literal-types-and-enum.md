# Day5: Literal Types（リテラル型）と Enum（列挙型）

これまでは `string` や `number` のような「広い型」を使ってきました。
Day 5では、**特定の値そのものを型として扱う**方法を学びます。

- `"left" | "right"` のように、許可する値を厳密に制限する
- `0 | 1` のように、数値の候補を限定する
- 関連する定数セットを `enum` でまとめて管理する

この考え方を使うと、入力ミスや想定外の値をコンパイル時に防げます。

## 1. String Literal Types

文字列の具体値を型として定義します。

```ts
let direction: "left" | "right";

direction = "left";  // OK
direction = "right"; // OK
// direction = "up"; // NG: 型エラー
```

### 実用例: ボタンのサイズ指定

```ts
type ButtonSize = "small" | "medium" | "large";

function createButton(label: string, size: ButtonSize) {
  return `[${size}] ${label}`;
}

createButton("保存", "small");
// createButton("保存", "tiny"); // NG
```

`string` だけで受け取るより、候補を固定することで安全性が上がります。

## 2. Numeric Literal Types

数値でも同じように、具体値だけを許可できます。

```ts
let binaryDigit: 0 | 1;

binaryDigit = 0; // OK
binaryDigit = 1; // OK
// binaryDigit = 2; // NG
```

### 実用例: 成否フラグ

```ts
type ResultCode = 0 | 1;

function isSuccess(code: ResultCode): boolean {
  return code === 1;
}
```

`number` に比べ、意図しない値の混入を防ぎやすくなります。

## 3. Literal Types と Union の相性

Literal TypesはUnionと組み合わせると強力です。

```ts
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function request(url: string, method: HttpMethod) {
  console.log(`${method} ${url}`);
}

request("/users", "GET");
// request("/users", "FETCH"); // NG
```

APIの操作種別のように、候補が決まっている値に特に向いています。

## 4. Enum（列挙型）の基本

`enum` は関連する定数に名前を与えてまとめる機能です。
C言語の `enum` に近い感覚で使えます。

```ts
enum Direction {
  Left,
  Right,
  Up,
  Down,
}

let dir: Direction = Direction.Left;

if (dir === Direction.Left) {
  console.log("左に移動");
}
```

### Numeric Enum の値

初期値を指定しない場合、`0` から連番になります。

```ts
enum Status {
  Idle,    // 0
  Loading, // 1
  Success, // 2
  Error,   // 3
}
```

明示的に開始値を変えることもできます。

```ts
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}
```

## 5. String Enum

文字列を値として持つEnumです。
ログやAPI連携時に意味が分かりやすいです。

```ts
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

function canEdit(role: UserRole): boolean {
  return role === UserRole.Admin || role === UserRole.Editor;
}
```

## 6. Literal Types と Enum の使い分け

### Literal Types が向く場面

- 型だけで候補を表現したい
- JavaScript出力を増やしたくない（`type` はコンパイル後に消える）
- Union型ベースで軽量に書きたい

### Enum が向く場面

- 候補に意味のある名前を付けたい
- 定数セットをひとまとまりで管理したい
- C系言語に近い記法でチーム共有したい

## 7. よくある注意点

1. `enum` はJavaScript出力に残る
   - `type` と違って実体を持つため、出力サイズや挙動を意識する。
2. 文字列比較のスペルミス
   - Literal Typesにしておくと、タイポをコンパイル時に検出できる。
3. 広い型に戻してしまう
   - せっかく候補を絞ったのに `string` や `number` に戻すと安全性が下がる。

## 8. 練習問題

1. `"on" | "off"` の型 `SwitchState` を作成し、`toggle` 関数を実装する。
2. `0 | 1 | 2` の型 `RetryCount` を作成し、受け取った回数を表示する関数を作る。
3. `enum LogLevel { Info, Warn, Error }` を作成し、レベルに応じてメッセージを出し分ける。
4. 文字列Enum `Theme`（`Light`, `Dark`）を作成し、テーマ名を返す関数を作る。

## 9. まとめ

- Literal Typesは「具体値を型にする」ことで入力を厳密に制限できる。
- String Literal と Numeric Literal は、誤入力防止に非常に有効。
- Enumは関連定数を名前付きで管理でき、可読性・保守性を上げやすい。
- 目的に応じて Literal Types と Enum を使い分けることが重要。

Day 4のNarrowingともつながる内容なので、次は「判別可能Union（Discriminated Union）」に進むと理解が深まります。
