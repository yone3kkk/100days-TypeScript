# Day7: Interface（インターフェース）の基本

今日は、TypeScriptでオブジェクトの形を定義する `interface` を学びます。
C言語の `struct` を知っている人にとって、最初の感覚はかなり近いです。

- `struct`: データをまとめる箱
- `interface`: オブジェクトが守るべきルール（契約）

「このオブジェクトは最低限この形であること」を型として明示できるのが、Interfaceの強みです。

## 1. Interfaceの宣言

基本形は次の通りです。

```ts
interface User {
  id: number;
  name: string;
}
```

この定義により、`User` 型として扱う値は `id` と `name` を持つ必要があります。

```ts
interface User {
  id: number;
  name: string;
}

function createGreeting(user: User): string {
  return `Welcome, ${user.name} (#${user.id})`;
}
```

## 2. readonly: 書き換え禁止のプロパティ

`readonly` を付けると、初期化後に変更できないプロパティになります。

```ts
interface User {
  readonly id: number;
  name: string;
}

function renameUser(user: User, newName: string): User {
  user.name = newName; // OK
  // user.id = 99; // NG: readonly のため代入不可
  return user;
}
```

IDのような「途中で変わってはいけない値」に向いています。

## 3. 任意プロパティ ?: あってもなくても良い

`?` を付けると、そのプロパティは省略可能になります。

```ts
interface User {
  readonly id: number;
  name: string;
  age?: number;
}

function canDrinkAlcohol(user: User): boolean {
  if (user.age === undefined) {
    return false;
  }
  return user.age >= 20;
}
```

`age` がない場合もあるので、使う前に存在チェックを行うのが安全です。

### C言語との感覚の違い

C言語で「あるかもしれない値」を扱うには、ポインタや `NULL` を使って表現することが多いです。
TypeScriptでは `age?: number` と書くだけで「省略可能」を型で表現できます。

## 4. Interfaceは契約書

関数に `User` を受け取らせると、呼び出し側にもルールが強制されます。

```ts
interface User {
  readonly id: number;
  name: string;
  age?: number;
}

function formatUserCard(user: User): string {
  const ageText = user.age !== undefined ? `${user.age} years old` : "age unknown";
  return `${user.name} (${ageText})`;
}
```

このように、引数の形を固定すると、利用側のミスをコンパイル時に検出できます。

## 5. type との違い（最初に押さえる範囲）

まずは次の理解で十分です。

- `type`: 型に名前を付ける汎用機能（UnionやTupleなどにも使える）
- `interface`: 主にオブジェクトの形を定義するための機能

### 同じことを表せる例

```ts
interface UserByInterface {
  id: number;
  name: string;
}

type UserByType = {
  id: number;
  name: string;
};
```

どちらもオブジェクトの形を定義できます。学習初期では、

- オブジェクトの設計図を作るときは `interface`
- Unionなども含めて型を組み立てるときは `type`

と使い分けると整理しやすいです。

## 6. 小さな実践例: プロフィール更新

`readonly` と `?` を同時に使う典型例です。

```ts
interface UserProfile {
  readonly id: number;
  name: string;
  age?: number;
}

function updateProfileName(profile: UserProfile, newName: string): UserProfile {
  return {
    ...profile,
    name: newName,
  };
}

function registerAge(profile: UserProfile, age: number): UserProfile {
  return {
    ...profile,
    age,
  };
}
```

`id` は変えず、`name` や `age` は必要に応じて更新する、という現場でよくある要件を素直に表現できます。

## 7. 練習問題

1. `Product` インターフェースを作る。
   - `readonly sku: string`
   - `name: string`
   - `price: number`
   - `description?: string`
2. `Product` を受け取り、表示用の文字列を返す `buildProductLabel` 関数を作る。
3. `description` がある場合とない場合で返す文字列を変える。
4. `sku` を変更しようとして型エラーになることを確認する。

## 8. まとめ

- Interfaceは「オブジェクトの契約」を表す。
- `readonly` は不変にしたい値を守るために使う。
- `?` は「あるかもしれない値」を自然に表現できる。
- C言語の `struct` よりも、TypeScriptのInterfaceはルール定義の意味が強い。

次のステップでは、Interfaceに関数型のプロパティを持たせたり、Interface同士を拡張して設計を大きくする練習に進むと理解が深まります。