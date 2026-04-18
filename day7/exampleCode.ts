interface UserProfile {
  readonly id: number;
  name: string;
  age?: number;
}

function updateProfileName(profile: UserProfile, newName: string): UserProfile {
  return {
    ...profile,
    name: newName,
  };
}

function registerAge(profile: UserProfile, age: number): UserProfile {
  return {
    ...profile,
    age,
  };
}

// 8-11,15-18
// 元の profile を直接書き換えずに新しいオブジェクトを返している
// 元のオブジェクトを壊さない
// 必要な部分だけ差し替えられる
// readonly の id をそのまま保ちやすい
// optional な age もそのまま引き継げる