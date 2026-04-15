# Day4: Union型・Intersection型・Narrowing の基礎整理

Day 4では、TypeScriptの「型を組み合わせる」考え方を重点的に学習した。
複数の型候補を安全に扱うための基本パターンを実装で確認した。

## 実施内容

1. Union型（`|`）の基本
   - `number | string` のように複数候補を表現。
   - APIレスポンスや入力値の揺れを型で表現できることを確認。
   - 配列にもUnionを適用（`(number | string)[]`）。

2. Intersection型（`&`）の基本
   - 2つのオブジェクト型を組み合わせて、両方のプロパティを持つ型を作成。
   - `type HasName & HasAge` のように型を合成。
   - 実践例として認証情報（`AuthInfo`）とプロフィール（`Profile`）を合成した `UserAccount` を実装。

3. 型の絞り込み（Narrowing）
   - `typeof` を使った基本的なNarrowing。
   - `number | string` の値を `if (typeof id === "number")` で絞り込み。
   - 分岐内で特定の型メソッド（`.toUpperCase()`、`.toFixed()`）を安全に呼び出し。

4. オブジェクトUnionのNarrowing
   - `in` 演算子を使ってプロパティの有無で型を判定。
   - `kind: "dog" | "cat"` のリテラル型を組み合わせることで、TypeScriptコンパイラが確実に型を判別できる。
   - 実装例：`if ("barkVolume" in pet)` でDog型を特定し、プロパティに安全にアクセス。

5. 実装上の注意点と対策
   - **注意：** プロパティ名のタイプミスは `in` 演算子での判定失敗につながる。
     - 例：`"barkvolume"` と `barkVolume` の不一致はコンパイルエラーを招く。
   - **対策：** IDE のオートコンプリートを使用して、プロパティ名を正確に入力。
   - **注意：** `in` 演算子を使う場合も、関数に正しく引数を渡すことが必須。
     - 例：`describePet({ kind: "dog", barkVolume: 80 })` のように型と合致したオブジェクトを渡す。

## 学んだこと

- TypeScriptの型合成（Union・Intersection）は、設計の柔軟性を大幅に向上させる。
- `typeof` による型絞り込みはプリミティブ型（string、number など）に有効。
  - `typeof id === "string"` で string型特定→ `.toUpperCase()` 使用可能。
  - `typeof id === "number"` 以外で number型特定→ `.toFixed()` 使用可能。
- オブジェクト型のNarrowingには `in` 演算子が有効だが、**リテラル型で判別可能にする設計** がより堅牢。
- アロー関数でも従来の function 記法でも、Narrowingの動作に違いはない。
- 型安全性：Narrowingなしでは Union型の詳細なプロパティにアクセスできない。これが型チェックの強さ。

## AIによるレビュー注意点

- **判別可能Union（Discriminated Union）** は、Day 4の学習内容を次のステップへ進める際に重要なパターン。
  例：
  ```ts
  type Dog = {
    kind: "dog";          // リテラル型で判別
    barkVolume: number;
  };
  type Cat = {
    kind: "cat";          // リテラル型で判別
    livesLeft: number;
  };
  // kind の値で完全に型が特定される
  if (pet.kind === "dog") {
    // ここで pet は確実に Dog 型
  }
  ```

- Union型でプロパティ名が異なる場合、typoに気をつけること。開発環境でのオートコンプリートを活用。
- `parseFloat()` と `.toFixed()` の組み合わせ：`.toFixed()` は文字列を返すため、`parseFloat()` で数値に変換する。
- 複数のUnion型を扱う際は、型を正確に定義しきることが後々のバグ防止につながる。



