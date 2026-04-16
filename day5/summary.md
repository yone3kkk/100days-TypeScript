# Day5 Summary: Literal Types と Enum

## 学習テーマ
- Literal Types（リテラル型）で、取り得る値を厳密に制限する
- Enum（列挙型）で、関連する定数を名前付きで管理する
- Union型と組み合わせて、型安全で読みやすいAPIを作る

## 1. Literal Types

### 文字列リテラル型
- 例: `'up' | 'down' | 'left' | 'right'`
- `string` 全体ではなく、許可した文字列だけを受け付けられる
- タイポや想定外の入力をコンパイル時に防げる

```ts
let direction: 'up' | 'down' | 'left' | 'right';

direction = 'up';      // OK
direction = 'right';   // OK
// direction = 'forward'; // NG
```

### 数値リテラル型
- 例: `0 | 1`
- 数値の候補を限定して意図を明確化できる

```ts
let binaryDigit: 0 | 1;

binaryDigit = 0; // OK
binaryDigit = 1; // OK
// binaryDigit = 2; // NG
```

## 2. Literal Types + Union の実践
- `HttpMethod` のように候補が決まっている入力と相性が良い
- API呼び出し時の誤入力（例: `FETCH`）を防げる

```ts
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const request = (url: string, method: HttpMethod): void => {
  console.log(`${method} ${url}`);
};
```

## 3. Enum（列挙型）
- 関連する定数をひとまとまりにし、意味のある名前を付けられる
- `type` と違って実行時にも値として存在する

### Numeric Enum
```ts
enum Direction {
  Left,
  Right,
  Up,
  Down,
}
```
- 初期値を省略すると `0` から連番になる
- `Direction.Left` は内部的に `0`

### String Enum
```ts
enum UserRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER',
}
```
- ログや外部連携時に値の意味が分かりやすい
- 例: `canEdit` で編集可能ロールを判定

## 4. 演習で実装した内容
- `SwitchState = 'on' | 'off'` と `toggle`
- `RetryCount = 0 | 1 | 2` と `displayRetryCount`
- `LogLevel` Enum とレベル別ログ出力
- `Theme` Enum とテーマ名返却

## 5. 学習ポイント
- 候補が決まった値は、広い型（`string`/`number`）よりリテラル型が安全
- 定数セットの可読性・保守性を高めたいならEnumが有効
- Literal Typesは軽量、Enumは実行時にも使えるという違いを意識して選ぶ

## 6. 使い分けの目安
- Literal Typesを選ぶと良い場面:
  - 型注釈として値候補だけを表現したい
  - JavaScript出力を増やしたくない
- Enumを選ぶと良い場面:
  - 定数群を名前空間的に管理したい
  - チーム内で統一した定数参照をしたい
