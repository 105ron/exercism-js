class Trinary {
  constructor (number) {
    this.number = number.match(/\d/g) || [0];
  }
  toDecimal (number) {
    return this.number.
          reverse().
          map( char => parseInt(char) ).
          reduce( (accumulator, currentValue, index) =>  (currentValue * (3 ** index) + accumulator), 0);
  }
}

module.exports = Trinary;