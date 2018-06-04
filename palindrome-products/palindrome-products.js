function arrayContainsArray(array, element) {
  var containsArray = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i].join() === element.join()) {
      containsArray = true;
    }
  }
  return containsArray;
}

class Palindromes {
  constructor (paramsObject) {
    this.minFactor = paramsObject.minFactor || 1;
    this.maxFactor = paramsObject.maxFactor;
  }
  generate () {
    const minFactor = this.minFactor;
    const maxFactor = this.maxFactor;

    const palindromes = [];
    const palindromeIndexes = [];

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = minFactor; j <= maxFactor; j++) {
        let result = i * j;
        if (!this.isPalindrome(result)) { continue; }

        let newFactor = [i, j].sort();

        if (!Array.isArray(palindromes[result])) {
          palindromes[result] = [];
          palindromeIndexes.push(result);
        }

        if (!arrayContainsArray(palindromes[result], newFactor)) {
          palindromes[result].push(newFactor);
        }
      }
    }
    this.palindromes = palindromes;
    this.palindromeIndexes = palindromeIndexes;
  }

  largest () {
    const largestPalindrome = Math.max.apply(null, this.palindromeIndexes);
    const factors = this.palindromes[largestPalindrome];
    return { value: largestPalindrome, factors: factors };
  } 

  smallest () {
    const smallestPalindrome = Math.min.apply(null, this.palindromeIndexes);
    const factors = this.palindromes[smallestPalindrome];
    return { value: smallestPalindrome, factors: factors };
  }

  isPalindrome (number) {
    return number.toString().split('').reverse().join('') == number;
  }
}

module.exports = Palindromes

