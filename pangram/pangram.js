class Pangram {
  constructor(string) {
    this.sentence = string.toLowerCase();
  }

  isPangram() {
    const alphabetArray = Array(26).fill().map((_, i) => String.fromCharCode(i+97));
    return alphabetArray.every( (x) => {
      return this.sentence.includes(x);
    });
  }
}

module.exports = Pangram;