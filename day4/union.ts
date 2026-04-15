// union型は、複数の型を表現することができる
// 論理回路で言うと、ORと同じ状態である
// 指定された方のうち、どちらかに合致していれば良い

let id: number | string;

id = 123;
console.log(id);
id = "123";
console.log(id);
id = "A-102";
console.log(id);
// id = true; // boolean は number | string に含まれないのでエラー

// 主な実務例
// 入力値の揺れを吸収する
const printUserId = (userId: number | string) => {
    console.log(`User ID: ${userId}`);
}
printUserId(123);
printUserId("abc");

// 配列の要素を揺れを吸収する
const printUserIds = (userIds: (number | string)[]) => {
    console.log(userIds);
}
printUserIds([123, "abc", 456]); //配列の値の方が統一されてなくても型エラーを出さない

// 基本はstringを返すが、例外のときにnullで返す関数も作成できる
const getGreeting = (name? : string): string | null => {
    if (name) {
        return `Hello, ${name}!`;
    }
    return null;
}

console.log(getGreeting("Taro"));
console.log(getGreeting());