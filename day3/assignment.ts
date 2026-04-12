// 2つの数値を受け取り、足し算結果を返す関数
// 文字列を受け取り、コンソール出力する（void）関数
// 名前と年齢（オプション）を受け取り、ユーザー情報を表示する関数
// 配列の平均値を計算する関数


const add = (a: number,b: number) :number => a + b;

const stdout = (str: string): void => console.log(str);

const displayUserInfo = (name: string, age?: number): void => {
    if (age != null) {
        console.log(`${name}, ${age} years old`);
    }else {
        console.log(`${name}`);
    }
}
const mean = (numbers: number[]): number => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

console.log(add(1,2));
stdout("123");
displayUserInfo("Taro", 20);
displayUserInfo("Hanako");
console.log(mean([1,2,3,4,5]));
