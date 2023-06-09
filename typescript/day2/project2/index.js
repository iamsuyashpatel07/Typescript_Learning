"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number \n");
    var operator = (0, readline_sync_1.question)("Enter operator \n");
    var secondStr = (0, readline_sync_1.question)("Enter second number \n");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log("result:" + result);
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', '\ninnvalid Input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+': return firstNum + secondNum;
        case '-': return firstNum - secondNum;
        case '*': return firstNum * secondNum;
        case '/': return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNumber = parseInt(str);
    var isNum = Boolean(!isNaN(maybeNumber));
    return isNum;
}
main();
