const allergiesDictionary = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats'
}

const binary = [256, 128, 64, 32, 16, 8, 4, 2, 1];

class Allergies {
  constructor (score) {
    this.score = score;
  }

  list () {
    let total = this.score;
    return binary.filter( value => {
      if (Math.floor(total / value) ) {
        total -= value;
        return value < 256; //no dictionary for values of 256 and greater
      }
    }).map( value => allergiesDictionary[value] ).reverse();
  }

  allergicTo (allergy) {
    return this.list().includes(allergy)
  }

}

module.exports = Allergies;