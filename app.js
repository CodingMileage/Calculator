let num1 = '';
let num2 = '';
let operation = '';
let displayValue = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
    return NaN;
}

function updateDisplay() {
    const displayElement = document.getElementById('current');
    displayElement.textContent = displayValue;
}

function appendToDisplay(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(operator) {
    if (num1 === '') {
        num1 = displayValue;
        displayValue = '';
        operation = operator;
    }
}

function calculate() {
    if (num1 !== '' && operation !== '' && displayValue !== '') {
        num2 = displayValue;
        displayValue = operate(operation, parseFloat(num1), parseFloat(num2)).toString();
        num1 = '';
        num2 = '';
        operation = '';
        updateDisplay();
    }
}

function clearDisplay() {
    num1 = '';
    num2 = '';
    operation = '';
    displayValue = '';
    updateDisplay();
}

// Add event listeners to your buttons...

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', function() {
        appendToDisplay(this.textContent);
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function() {
        setOperator(this.textContent);
    });
});

document.querySelector('.equals').addEventListener('click', calculate);

document.querySelector('.clear').addEventListener('click', clearDisplay);
