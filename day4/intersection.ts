// intersection型は、複数の型を組み合わせることができる
// 論理回路で言うと、ANDと同じ状態である
// 指定された型のすべての要素を持った変数を宣言しないいけない

type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

type persoN = {name: string} & {age: number};
type person = {name: string, age: number};
// 後者のような実装は、拡張性がない。
// それに対して、前者のような実装は、
// 例えば HasName という型を、Person だけでなく Company や Pet という
// 別の型を作るときにも使い回したい場合に便利


// 他者の型（ライブラリや共有定義）
type User = { id: string; name: string };

// 独自のプロパティを拡張
type MyUser = User & {
  isActive: boolean;
  department: string;
};
// Intersection型（&）が本当に真価を発揮するのは、
// 「他の人が作った型」や「すでに存在する巨大な型」に、
// 後から自分の独自のプロパティを「ちょい足し（拡張）」したい時

const Taro: person = {
    name: "Taro",
    age: 20,
};

type AuthInfo = {
  email: string,
  password: string
  lastLoginAt: Date
};
type Profile = {
  displayName: string,
  bio?: string
};
type authProfile = AuthInfo & Profile;

const taroAuthProfile: authProfile = {
  email: "taro@ex.com",
  password: "123456",
  lastLoginAt: new Date(),
  displayName: "Taro Yamada",
};
// 実際にはパスワードはハッシュ化して取り扱うのが正しい