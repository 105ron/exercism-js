class SumOfMultiples {

  constructor (factors) {
    this.factors = factors
  }

  to (value) {
    const factorNumbers = [0];
    this.factors.forEach(function (factor) {
      for (let i = 1; i < value; i++) {
        if (!factorNumbers.includes(i) && i % factor === 0) {
          factorNumbers.push(i)
        }
      }
    })
    const factorSum = factorNumbers.reduce(function(accumulator, current) {
      return accumulator + current; 
    }, 0);
    return factorSum
  }
}

module.exports = SumOfMultiples;