const hexCodes = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7,
                  8: 8, 9: 9, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }

class Hexadecimal  {
  constructor (hex) {
    this.hexadecimal = hex;
  }

  toDecimal () {
    return [...this.hexadecimal].reverse().
              reduce( (accumulator, current, index) => 
              accumulator + Number(hexCodes[current] * (16 ** index)), 0 )
              || 0;  //returns 0 if result is NaN due to non hex-codes
  }
}

module.exports = Hexadecimal;