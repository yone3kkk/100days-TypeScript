function greet(name : string) : void {
    console.log(`Hello, ${name}!`);
    return;
}

greet("Taro");
// greet(123);
// greet();
// 関数の仮引数の型と合致しない型の引数が与えられたときはエラーを吐く

function add(a : number, b : number) : number {
    return a + b;
}

const result: number = add(10, 5);
console.log(result);