let num1 = 0;
let num2 = 0;
let operation = '';

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num2 - num1;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 / num1;
}

function operate(num1, num2, operation) {
    if (operation == '+') {
        return add(num1, num2);
    } else if (operation == '-') {
        return subtract(num1, num2)
    } else if (operation == '*') {
        return multiply(num1, num2)
    } else if (operation == '/') {
        return divide(num1, num2)
    }
}
console.log(divide(2, 8));