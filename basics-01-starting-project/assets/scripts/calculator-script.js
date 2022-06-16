// declare constants with "const"
const DEFAULT_RESULT = 0; 
// declare variables with "let"
let currentResult = DEFAULT_RESULT;

const DEFAULT_CALCULATION = '';
let currentCalculation = DEFAULT_CALCULATION;


function add() {
    let inputVal = getInput();
    currentCalculation = getSymbolToCurrentCalculation("+", inputVal);
    currentResult = currentResult + inputVal;
    outputResult(currentResult, currentCalculation);
    emptyCurrentCalculation();
}
addBtn.addEventListener('click', add);

function substract() {
    let inputVal = getInput();
    currentCalculation = getSymbolToCurrentCalculation("-", inputVal);
    currentResult = currentResult - inputVal;
    outputResult(currentResult, currentCalculation);
    emptyCurrentCalculation();
}
subtractBtn.addEventListener('click', substract);

function multiply() {
    let inputVal = getInput();
    currentCalculation = getSymbolToCurrentCalculation("*", inputVal);
    currentResult = currentResult * inputVal;
    outputResult(currentResult, currentCalculation);
    emptyCurrentCalculation();
}
multiplyBtn.addEventListener('click', multiply);

function divide() {
    let inputVal = getInput();
    currentCalculation = getSymbolToCurrentCalculation("/", inputVal);
    currentResult = currentResult / inputVal;
    outputResult(currentResult, currentCalculation);
    emptyCurrentCalculation();
}
divideBtn.addEventListener('click', divide);

function getInput() {
    return parseFloat(userInput.value);
}

function getSymbolToCurrentCalculation(operator, userInputValue) {
    return currentCalculation + currentResult + operator + userInputValue; 
}

function emptyCurrentCalculation(){
    userInput.value = '';
    currentCalculation = DEFAULT_CALCULATION;
}