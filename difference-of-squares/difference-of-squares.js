class Squares {

    constructor(n) {
      this.n = n;
      this.squareOfSums = n*(n+1) / 2;
      this.squareOfSums *= this.squareOfSums;
      this.sumOfSquares = n*n*n/3 + n*n/2 + n/6;
      this.difference = this.squareOfSums - this.sumOfSquares;
    }

    
}

module.exports = Squares;