class Isogram {
  constructor (word) {
    //convert to lowercase and remove whitespace and '-';
    this.word = word.toLowerCase().replace(/\s|-/g, '');
  }
  isIsogram() {
    const uniqueValues = string => [...new Set(string)]
    const deDupedString = string => uniqueValues(string).join('')
    const noDuplicates = deDupedString(this.word)
    return this.word === noDuplicates;
  }
}

module.exports = Isogram;