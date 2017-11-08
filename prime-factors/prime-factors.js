const primeFactors  = {
  isPrime (number) {
    const q = Math.floor(Math.sqrt(number));
    for (let i = 2; i <= q; i += 1) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  },
  for (number) { 
    let primesArray = [];
    let divisor = number;
    let noRemainder
    let n;
    if (number === 1) return [];
    const factorial = primes => {
      return primes.reduce(((sum, value) => sum * value),1)
      };
    while (factorial(primesArray) !== number) {
      remainder = true;
      n = 2;
      while (remainder) {
        if (this.isPrime(n) && divisor % n === 0) {
          remainder = false;
          primesArray.push(n)
          divisor = divisor / n;
        } else {
          n += 1
        }
      }
    }
    return primesArray;
  }


}
module.exports = primeFactors;