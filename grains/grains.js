const BigInt = require('./big-integer');
const chessBoardSquares = 64;

class Grains {
  square(number) {
    return BigInt(2).pow(number -1).toString();
  }

  total(number = 1) {
    return BigInt(this.square(chessBoardSquares + 1)).subtract(1).toString();
  }
}

module.exports = Grains;