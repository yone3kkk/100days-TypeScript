// 1. `"on" | "off"` の型 `SwitchState` を作成し、`toggle` 関数を実装する。
// 2. `0 | 1 | 2` の型 `RetryCount` を作成し、受け取った回数を表示する関数を作る。
// 3. `enum LogLevel { Info, Warn, Error }` を作成し、レベルに応じてメッセージを出し分ける。
// 4. 文字列Enum `Theme`（`Light`, `Dark`）を作成し、テーマ名を返す関数を作る。

type SwitchState = "on" | "off";
const toggle = (state : SwitchState): SwitchState =>{
    // if (state === "on"){
    //     return "off";
    // } else {
    //     return "on";
    // }
    // if文もいいけど...三項演算子を使ってみよう
    return state === "on" ? "off" : "on";
    // 評価部分： state === "on"
    // 評価がtrueのときに返す値： "off"
    // 評価がfalseのときに返す値： "on"
}
console.log(toggle("on"));
console.log(toggle("off"));

type RetryCount = 0 | 1 | 2;
const displayRetryCount = (retryCount: RetryCount): void => {
    switch (retryCount) {
        case 2:
            console.log(`Game over.`);
            break;
        case 1:
            console.log(`You have only one more chance :(`);
            break;
        case 0:
            console.log(`You can do it! Try again! :D`);
            break;
        default:
            console.log(`Invalid retry count: ${retryCount}`);
            break;
    }
}
displayRetryCount(0);
displayRetryCount(1);
displayRetryCount(2);
// displayRetryCount(3); // 3はRetryCount型に含まれないのでエラー

enum LogLevel {
    Info = "Info",
    Warn = "Warn",
    Error = "Error"
}
const log = (level: LogLevel, message: string): void => {
    switch (level) {
        case LogLevel.Info:
            console.log(`Info: ${message}`);
            break;
        case LogLevel.Warn:
            console.warn(`Warn: ${message}`);
            break;
        case LogLevel.Error:
            console.error(`Error: ${message}`);
            break;
    }
}
log(LogLevel.Info, "Hello, world!");
log(LogLevel.Warn, "Warning!");
log(LogLevel.Error, "Error!");

enum Theme {
    Light = "Light",
    Dark = "Dark"
}
const getThemeName = (theme: Theme): string => {
    switch (theme) {
        case Theme.Light:
            return "Light";
        case Theme.Dark:
            return "Dark";
    }
}
console.log(getThemeName(Theme.Light));
console.log(getThemeName(Theme.Dark));