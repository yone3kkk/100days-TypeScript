const formatId = (id: number | string) => {
    // typeofで型を判定することができる
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return parseFloat(id.toFixed(0));
    // toFixedは、小数第(arg)桁目で四捨五入を行うメソッド
    // 返り値は浮動小数点数の精度が保証されないため、文字列型となる
}

console.log(formatId("123"));
console.log(formatId(123));
console.log(formatId(123.456));
console.log(formatId("taro"));

type Dog = {
    kind: "dog";
    barkVolume: number;
};
type Cat = {
    kind: "cat";
    livesLeft: number;
};
type Pet = Dog | Cat;
const describePet = (pet: Pet) : string => {
    // inを使うことで、それが存在するかを判定することができる
    if ("barkVolume" in pet) {
        return `Dog: bark volume = ${pet.barkVolume}`;
    }
    return `Cat: lives left = ${pet.livesLeft}`;
}
console.log(describePet({ kind: "dog", barkVolume: 80 }));
console.log(describePet({ kind: "cat", livesLeft: 9 }));
