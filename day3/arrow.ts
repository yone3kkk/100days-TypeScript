const greet = (name: string): void => console.log(`Hello, ${name}!`);

greet("Taro");

const add = (a: number, b: number): number => a + b;

const result: number = add(10, 5);
console.log(result);