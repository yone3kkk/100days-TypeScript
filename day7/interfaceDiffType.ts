interface UserByInterface {
  id: number;
  name: string;
}
// extendで拡張できる
interface AdminUserInterface extends UserByInterface {
    role: string;
}

type UserByType = {
  id: number;
  name: string;
};
// typeは & で似たことはできるが、継承とは少し違う
type AdminUserType = UserByType & { role: string };
// Union型 → typeでしかできない
type ID = number | string;
// タプル → typeでしかできない
type Point = [number, number];


interface UserByInterface {
    id: number;
}
interface UserByInterface {
    name: string; // 自動的にマージされる
}
// → { id: number; name: string; } になる

// typeは同名で2回宣言するとエラー
type UserByType1 = { id: number };
type UserByType1 = { name: string }; // ❌ エラー


// claude「迷ったらオブジェクトは interface、それ以外は type と使い分けるのが一般的ですよ！」 らしいっすよ