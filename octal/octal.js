class Octal {
  constructor (octal) {
    this.octal = /^[0-7]+$/.test(octal) ? [...octal] : [0];
  }

  toDecimal () {
    return this.octal.reverse().
                      reduce( (accumulator, current, index) => accumulator +(Number(current) * 8 ** index), 0 );
  }
}

module.exports = Octal;