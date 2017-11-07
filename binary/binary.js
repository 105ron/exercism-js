class Binary {
  constructor (number) {
    this.number = number;
  }

  toDecimal () {
    if (/[2-9]|[a-z]/.test(this.number)) return 0
    const reversedArray = this.number.split('').reverse();
    return reversedArray.map( (binary, index) => (2 ** index) * binary)
      .reduce( (sum, value) => sum + value);
    
  }
}

module.exports = Binary;