//これはオブジェクト型
//オブジェクト型は、プロパティとその型を定義することができる。
let userInfo1 : {
    name: string;
    age: number;
    isStudent?: boolean; 
    //?はオプショナルプロパティを意味する。つまり、このプロパティは存在しても存在しなくてもよいことを示す。
} = {
    name: "Taro",
    age: 20
};

console.log(userInfo1);

//これはタプル型
//タプル型は、固定された数の要素を持つ配列で、各要素の型が異なることができる。
//添字アクセスが可能ですが、マジックナンバーを避けるために、オブジェクト型の方が好まれることが多い。
let userInfo2 : [string, number, boolean] = ["Taro", 20, true];

console.log(userInfo2);
console.log(userInfo2[0], userInfo2[1], userInfo2[2]);

// タプルのタプル
let tt: [[string, number], [boolean, string]] = [
  ["Taro", 20],
  [true, "ok"]
];

// タプルの配列
let tupleArray: [string, number][] = [
  ["Taro", 20],
  ["Hanako", 25]
];

// 配列の配列(2次元配列)
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
];