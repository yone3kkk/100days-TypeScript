# TypeScript Union型・Intersection型・Narrowing ハンズオン

Day 4では、TypeScriptの「型を組み合わせる」考え方を学びます。

- Union型（`|`）: A または B
- Intersection型（`&`）: A かつ B
- Narrowing（型の絞り込み）: 条件分岐で型を特定して安全に扱う

この3つを理解すると、実装の柔軟性と安全性を両立しやすくなります。

---

## 1. Union型（`|`）

Union型は「複数候補のどれか1つ」を表現します。

```ts
let id: number | string;

id = 101;      // OK
id = "A-102";  // OK
// id = true;   // エラー: boolean は number | string に含まれない
```

**ポイント:**
- `number | string` は「number または string」。
- 使う側は、どちらの型が来るかを意識して処理を書く必要がある。

---

## 2. Union型でよくある実装パターン

### 2-1. APIレスポンスや入力値の揺れを表現する

```ts
function printUserId(userId: number | string): void {
  console.log(`User ID: ${userId}`);
}

printUserId(1);
printUserId("guest-01");
```

### 2-2. 配列でもUnionを使える

```ts
const mixedValues: (number | string)[] = [10, "twenty", 30, "forty"];
console.log(mixedValues);
```

---

## 3. Intersection型（`&`）

Intersection型は「複数の型を合体して、両方の条件を満たす型」を作ります。

```ts
type HasName = {
  name: string;
};

type HasAge = {
  age: number;
};

type Person = HasName & HasAge;

const taro: Person = {
  name: "Taro",
  age: 20,
};
```

**ポイント:**
- `HasName & HasAge` は「name も age も必要」。
- オブジェクト設計で共通要素を組み合わせるときに便利。

---

## 4. Intersection型の実践例

### 4-1. 認証情報 + プロフィール情報

```ts
type AuthInfo = {
  email: string;
  lastLoginAt: Date;
};

type Profile = {
  displayName: string;
  bio?: string;
};

type UserAccount = AuthInfo & Profile;

const account: UserAccount = {
  email: "taro@example.com",
  lastLoginAt: new Date(),
  displayName: "Taro",
  bio: "TypeScript learner",
};
```

---

## 5. 型の絞り込み（Narrowing）

Union型は便利ですが、そのままでは型ごとの専用処理ができません。
`if` や `typeof` で「今の型」を特定してから処理します。

```ts
function formatId(id: number | string): string {
  if (typeof id === "number") {
    // ここでは id は number
    return `#${id.toFixed(0)}`;
  }

  // ここでは id は string
  return id.toUpperCase();
}

console.log(formatId(100));      // #100
console.log(formatId("ab-12")); // AB-12
```

**ポイント:**
- `typeof id === "number"` の分岐内では `id` を number として扱える。
- それ以外の分岐では string として扱える。

---

## 6. オブジェクトUnionのNarrowing（`in`演算子）

オブジェクトのUnion型では、`in` を使うとプロパティの有無で絞り込みできます。

```ts
type Dog = {
  kind: "dog";
  barkVolume: number;
};

type Cat = {
  kind: "cat";
  livesLeft: number;
};

type Pet = Dog | Cat;

function describePet(pet: Pet): string {
  if ("barkVolume" in pet) {
    return `Dog: bark volume = ${pet.barkVolume}`;
  }
  return `Cat: lives left = ${pet.livesLeft}`;
}
```

---

## 7. まとめ

|要素|意味|例|
|---|---|---|
|Union型|A または B|`number | string`|
|Intersection型|A かつ B|`HasName & HasAge`|
|Narrowing|分岐で型を特定|`typeof`, `in`|

---

## 8. 実装チェックリスト

- [ ] Union型で「取り得る型の候補」を正しく表現した
- [ ] Union型の値を使う前に、`typeof` などで絞り込んだ
- [ ] Intersection型で複数オブジェクト型を安全に合体できた
- [ ] 分岐ごとにアクセス可能なプロパティを意識した
- [ ] 型エラーが出た箇所を「なぜ守られたか」説明できる

---

## 9. 今日の演習課題

1. `number | string` を受け取って、文字列として返す `normalizeId` 関数を作る。
2. `Student` 型（`name`, `grade`）と `ClubMember` 型（`clubName`）を作り、`StudentClubMember` を Intersectionで定義する。
3. `Admin | User` のUnion型を作り、`if` 文で役割ごとに出力を変える関数を作る。
4. オブジェクトUnionに対して `in` を使ってNarrowingする関数を1つ実装する。

---

## 10. 次に意識すること

次の単元では、Union型とNarrowingをさらに活かすために、以下を意識すると理解が深まります。

- リテラル型（例: `"success" | "error"`）との組み合わせ
- 判別可能Union（Discriminated Union）
- 関数の戻り値にUnionを使う設計
