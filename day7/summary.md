# Day7 Summary: Interface（インターフェース）の基本

## 学習テーマ
- `interface` でオブジェクトの形を定義する
- `readonly` で書き換え禁止のプロパティを表現する
- `?` で任意プロパティを表現する
- `type` との違いを理解する

## 1. Interface の役割
- Interface は「このオブジェクトが最低限持つべき形」を表す
- C言語の `struct` に近い感覚で、データの構造を整理できる
- 関数の引数に使うと、呼び出し側にも必要なプロパティを強制できる

```ts
interface User {
  id: number;
  name: string;
}
```

## 2. readonly
- `readonly` を付けたプロパティは、初期化後に変更できない
- ID のように途中で変わってほしくない値に向いている

```ts
interface UserProfile {
  readonly id: number;
  name: string;
}
```

## 3. 任意プロパティ `?`
- `age?: number` のように書くと、その値はあってもなくてもよい
- 使う側では `undefined` の可能性を考えて分岐する必要がある
- C言語で `NULL` やポインタを使って表現していた柔軟さを、より素直に書ける

## 4. 実装例から学んだこと
- `updateProfileName(profile, newName)` は、元のオブジェクトを壊さずに新しいオブジェクトを返す書き方になっている
- スプレッド構文 `...profile` を使うことで、既存値を引き継ぎつつ一部だけ更新できる
- `registerAge(profile, age)` のように、任意プロパティを後から追加する更新も自然に書ける

```ts
return {
  ...profile,
  name: newName,
};
```

## 5. type との違い
- `type` は型に名前を付ける汎用的な機能
- `interface` は主にオブジェクトの形を定義するために使う
- 学習初期では、オブジェクトの設計図には `interface`、Union なども含めて組み立てるときは `type` と考えると整理しやすい

## 6. 学習ポイント
- Interface は「契約書」のように、必要な条件を明示できる
- `readonly` と `?` を組み合わせると、現実的なデータ構造を表現しやすい
- 更新系の関数では、元データを直接書き換えず、新しいオブジェクトを返す書き方が相性良い

## 7. 練習で意識したいこと
- `readonly sku: string` のような変更不可の値を含む型を作る
- `description?: string` のような任意項目を扱う
- `sku` を変更しようとして型エラーになることを確認する
- 関数の引数として Interface を使い、必要な項目が揃っていない値を防ぐ

## 8. まとめ
- Interface はオブジェクトの最低条件を定義するための道具
- `readonly` は不変にしたい値を守る
- `?` は「あるかもしれない値」を自然に表現する
- `type` よりも Interface は、オブジェクト構造を整理する場面で分かりやすい

次は、Interface の `extends` や、関数型プロパティ、class との接続を学ぶと、設計の幅がさらに広がる。