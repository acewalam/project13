let display = document.getElementById('display');
let currentInput = '';
let operator = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result;
    } catch (error) {
        display.value = 'Error';
    }
}
