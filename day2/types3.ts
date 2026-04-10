let value : any = "Hello";
console.log(value);
value = 42;
console.log(value);
value = true;
console.log(value);

// any型は、どんな型の値も許容するため、型安全性が失われる可能性がある。
// できるだけ使用を避け、必要な場合は適切な型を使用することが推奨される。

/*
tips
どうしても型が決められない一時的な場面だけ使う
使ったら後で具体的な型に置き換える
*/