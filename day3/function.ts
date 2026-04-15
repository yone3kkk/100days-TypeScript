function greet(name : string) : void {
    console.log(`Hello, ${name}!`);
    return;
}

greet("Taro");
// greet(123);
// greet();
// 関数の仮引数の型と合致しない型の引数が与えられたときはエラーを吐く

// 関数の型宣言を行うことで、戻り値に型を付ける
function add(a : number, b : number) : number {
    return a + b;
}

const result: number = add(10, 5);
console.log(result);

// 引数に配列を与えることが可能
function calcSum(nums: number[]) : number {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

console.log(calcSum([10,20,30]));
console.log(calcSum([]));

// 引数にデフォルト値を与えることが可能(city部分)
function displayUserInfo(name: string, age: number, isStudent?: boolean, city: string = "Tokyo") : void {
    
    if (isStudent) {
        console.log(`${name}, is a student, ${age} years old, lives in ${city}`);
    } else {
        console.log(`${name}, ${age} years old, lives in ${city}`);
    }
}

displayUserInfo("Taro", 20, true, "Kyoto");
displayUserInfo("Hanako", 25); 
// 第三引数:isStudentはオプション引数なので省力可能、第四引数は初期値があるので省力可能

// オプション引数を使うことで、必須引数を省略することが可能
function greetOptional(name?: string) : void {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Hello!");
    }
}

greetOptional("Taro");
greetOptional();