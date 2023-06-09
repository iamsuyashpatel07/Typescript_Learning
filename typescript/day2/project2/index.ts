import { question } from 'readline-sync';

type operator='+'|'-'|'*'|'/'

function main():void { 
    const firstStr: string = question("Enter first number \n")
    const operator: string = question("Enter operator \n")
    const secondStr: string = question("Enter second number \n")
    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as operator, secondNum,)
        console.log("result:"+result);
        
    }
    else { 
        console.log('\x1b[31m%s\x1b[0m','\ninvalid Input\n')
        main();
    }
}

function calculate(firstNum: number, operator: operator, secondNum: number) {
    switch (operator) {
        case '+': return firstNum + secondNum;
        case '-': return firstNum - secondNum;
        case '*': return firstNum * secondNum;
        case '/': return firstNum / secondNum;
    }
}


function isOperator(operator: string): boolean { 
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

function isNumber(str: string): boolean { 
    const maybeNumber = parseInt(str);
    const isNum: boolean =Boolean(!isNaN(maybeNumber))
    return isNum
}

main();