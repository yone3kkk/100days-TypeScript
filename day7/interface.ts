interface User {
    readonly id: number;
    name: string;
    age?: number
}

const createGreeting = (user: User): string => {
    return `Welcome, ${user.name} (#${user.id})`
}

const user1: User = {
    id: 1,
    name: `taro`,
};


const renameUser = (user: User, newName: string): User => {
    user.name = newName; // 引数として指定したuserの名前が直接書き換わってしまうので注意
    // 返り値に設定する用の新しい変数を用意するのがbetter
    // user.id = 99; readonly(読み取り専用)を与えているプロパティのためエラー
    return user;
}
// exampleCode.tsを参照。そちらのコードの方がより良い(もとのオブジェクトを破壊していない)

// readonlyを与えているオブジェクトを書き換えることに関して
// 疑問のレビューが挙げられている(claude chat)
const initializeUserAge = (user: User, age: number): User => {
    if (user.age !== undefined) return user;
    user.age = age;
    return user;
}


interface HasEmailUser extends User{
    Email: string;
}

const user2: HasEmailUser = {
    id: 10,
    name: "koichi",
    age: 21,
    Email: "hogehoge [at] hugahuga"
}

const canDrinkAlcohol = (user: User): boolean => {
    if (user.age === undefined) return false;
    return user.age >= 20;
}



const formatUserCard = (user: User): string => {
    const ageText = user.age !== undefined ? `${user.age} years old` : "unknown age";
    return `${user.name} (${ageText})`;
}
console.log(createGreeting(user1));
renameUser(user1, `hanako`);
console.log(createGreeting(user1));
initializeUserAge(user1, 13);
console.log(canDrinkAlcohol(user1));
console.log(canDrinkAlcohol(user2));
console.log(formatUserCard(user1));
console.log(formatUserCard(user2));