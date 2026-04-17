type calcOption = "add" | "sub" | "mul" | "div";

const calc = (num1: number, num2: number, op: calcOption): number | string => {
    if (op === "add") return num1 + num2;
    if (op === "sub") return num1 - num2;
    if (op === "mul") return num1 * num2;
    if (op === "div" && num2 !== 0) {
        return num1 / num2;
    }
    return ("!!!Zero division error");
}

const displayResult = (result: number | string): void => {
    if (typeof result === "number") {
        console.log(`Result: ${result}`);
        return;
    }
    console.error(result);
}

displayResult(calc(1, 2, "add"));
displayResult(calc(1, 2, "sub"));
displayResult(calc(1, 2, "mul"));
displayResult(calc(1, 2, "div"));
displayResult(calc(1, 0, "div"));