let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function chooseOperation(operation) {
    if (displayValue === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else {
        secondOperand = parseFloat(displayValue);
        firstOperand = operate(firstOperand, secondOperand, currentOperation);
    }
    currentOperation = operation;
    displayValue = '';
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}

function calculateResult() {
    if (currentOperation === null || displayValue === '') return;
    secondOperand = parseFloat(displayValue);
    displayValue = operate(firstOperand, secondOperand, currentOperation).toString();
    firstOperand = null;
    currentOperation = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('.display').value = displayValue;
}
