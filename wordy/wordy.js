String.prototype.replaceAll = function(searchStr, replaceStr) {
  const str = this;
  searchStr = searchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return str.replace(new RegExp(searchStr, 'gi'), replaceStr);
};

const ArgumentError = function() {}

const OPERATORS = {
  'plus':       '+',
  'minus':      '-',
  'divided':    '/',
  'multiplied': '*'
};

class WordProblem {

  constructor(input){
    this.problem = strip(input);
  }
  answer(){
    return eval(this.problem);
  }
}

function strip(problem) {
  const clean = problem
    .replace(/What is |by |\?/g, "")
    .split(" ")
    .map(piece => (Object.keys(OPERATORS).some(operator => piece === operator)) ? OPERATORS[piece] : piece);

    clean.splice(0,0,'(');
    clean.splice(4,0,")");

    return clean.join("");
}
module.exports = {
  WordProblem: WordProblem,
  ArgumentError: ArgumentError
}