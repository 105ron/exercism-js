const alphabetise = word => word.toLowerCase().split('').sort().join('');

class Anagram {
  constructor (word) {
    this.word = word;
  }

  matches (matchingWords) {
    // convert multiple arguments to an array if an array is not passed as matchingWords
    let args = (arguments.length === 1 ? arguments[0] : Array.apply(null, arguments));
    // if a single string was passed as an arguement convert it to an array
    args = Array.isArray(args) ? args : Array.apply(null, arguments);
    const comparisonWord = alphabetise(this.word);
    const results = args.filter( word => 
      (alphabetise(word) === comparisonWord) &&
      //don't return if it is the same word to begin with
      (this.word.toLowerCase() !== word.toLowerCase())
    );
    return results || [];
  }
}

module.exports = Anagram;