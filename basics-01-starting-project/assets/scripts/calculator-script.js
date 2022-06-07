// declare constants with "const"
const defaultResult = 0; 
// declare variables with "let"
let currentResult = defaultResult;

currentResult = currentResult + 10;

let calculationDesc = `${defaultResult} + 10`;
// Which is similar as
// let calculationDesc = defaultResult + " + 10";

outputResult(currentResult, calculationDesc);