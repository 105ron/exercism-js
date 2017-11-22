String.prototype.replaceAll = function(searchStr, replaceStr) {
  const str = this;
  searchStr = searchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return str.replace(new RegExp(searchStr, 'gi'), replaceStr);
};

const ArgumentError = function() {}

class WordProblem {
  constructor (question) {
    //remove 'What is ' and '?' from string
    this.question = question.substr(8).slice(0, -1);
  }

  answer () {
    let input = this.question;
    const dictionary = new Map([
      ['plus', '+'],
      ['minus', '-'],
      ['divided by', '/'],
      ['multiplied by', '*']
    ]);
    dictionary.forEach( (operatorSign, operatorWord) => {
      // Use the new input if it has changed the operator, otherwise use the old string
      input = input.replaceAll(operatorWord, operatorSign) || input;
    });
    //input === this.question we haven't found any operators in the string, throw ArgumentError
    if (input === this.question) throw new ArgumentError;
    //wrap ( ) around the first calcuation then evaluate it
    return eval(input.replace((/^-?\d+\s[+|-|*|/]\s-?\d+/), '($&)'));
  }
}
module.exports = {
  WordProblem: WordProblem,
  ArgumentError: ArgumentError
}