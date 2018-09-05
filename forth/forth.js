const emptyStackError = new Error('Stack empty');

function calculate(numOne, numTwo, numThree = 1, operatorOne, operatorTwo = '*') {
  const mathsOperations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a % b,
  };
  const operationOne = Math.floor(mathsOperations[operatorOne](numOne, numTwo));
  return [Math.floor(mathsOperations[operatorTwo](operationOne, numThree))];
}

function isDividingByZero(operators, numbersArray) {
  const [, b, c] = numbersArray;
  const [opOne, opTwo] = operators;
  const dividingByZero = (op, num) => op === '/' && num === 0;
  return dividingByZero(opOne, b) || dividingByZero(opTwo, c);
}

const validParameters = (operators, numbersArray) => operators.length === numbersArray.length - 1;

function performMathOperations(operators, numbers) {
  let result = [];
  if (isDividingByZero(operators, numbers)) throw new Error('Division by zero');
  if (validParameters(operators, numbers)) {
    const [a, b, c] = numbers;
    const [operatorOne, operatorTwo] = operators;
    result = calculate(a, b, c, operatorOne, operatorTwo);
  } else {
    throw emptyStackError;
  }
  return result;
}

function drop(arr) {
  if (arr.length === 0) throw emptyStackError;
  const newArr = [...arr];
  newArr.pop();
  return newArr;
}

function swap(arr) {
  if (arr.length < 2) throw emptyStackError;
  const newArr = [...arr];
  const right = newArr.pop();
  const left = newArr.pop();
  return [...newArr, right, left];
}

function over(arr) {
  if (arr.length < 2) throw emptyStackError;
  const newArr = [...arr];
  const copy = newArr[newArr.length - 2];
  newArr.push(copy);
  return newArr;
}

function duplicate(arr) {
  if (arr.length === 0) throw emptyStackError;
  const newArr = [...arr];
  const [lastElement] = newArr.slice(-1);
  newArr.push(lastElement);
  return newArr;
}

function runCommands(input) {
  let arr = input;
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case 'swap':
        arr = [...swap(arr.slice(0, i)), ...arr.slice(i + 1, arr.length)];
        break;
      case 'drop':
        arr = [...drop(arr.slice(0, i)), ...arr.slice(i + 1, arr.length)];
        i -= 2;
        break;
      case 'over':
        arr = [...over(arr.slice(0, i)), ...arr.slice(i + 1, arr.length)];
        i -= 2;
        break;
      case 'dup':
        arr = [...duplicate(arr.slice(0, i)), ...arr.slice(i + 1, arr.length)];
        break;
      default:
        if (/[a-z]/.test(arr[i])) throw new Error('Unknown command');
    }
  }
  const numbersArray = arr.map(n => +n);
  return numbersArray;
}

function splitInput(inputString) {
  const inputArray = inputString.match(/([-])?\d+|\w{2,}/g) || [];
  const operators = inputString.match(/[+-/%*](?!\d)/g);
  return { inputArray, operators };
}

function makeValidRegexPattern(key) {
  return key === '+' ? '\\+' : key;
}

class Forth {
  constructor() {
    this.regexKey = null;
    this.appendedCommands = null;
  }

  setAppendCommand(input) {
    const arr = input.split(' ');
    const [, key, ...commandsArr] = arr;
    if (/\d/.test(key)) throw new Error('Invalid definition');
    commandsArr.pop(); // Remove semi-colon from array
    this.appendedCommands = commandsArr.join(' ');
    this.regexKey = RegExp(makeValidRegexPattern(key), 'g');
  }

  evaluate(stackString) {
    let input = stackString.toLowerCase();
    if (input[0] === ':') {
      this.setAppendCommand(input);
      return;
    }
    if (this.appendedCommands) {
      input = input.replace(this.regexKey, this.appendedCommands);
    }
    const { inputArray, operators } = splitInput(input);
    const numbersArray = runCommands(inputArray);
    this.stack = operators ? performMathOperations(operators, numbersArray)
      : this.stack = numbersArray;
  }
}

module.exports = Forth;
