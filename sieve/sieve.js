const eratosthenesSieve = number => {
  const numberArray = Array.apply(null, Array(number + 1)).map(Boolean.prototype.valueOf,true)
  for ( let i = 2; i < Math.sqrt(number); i++ ) {
    if (numberArray[i]) {
      let j;
      for (c = 0; i * i + (c * i) <= number; c++) {
        let j = i * i + (c * i);
        numberArray[j] = false;
      }
    }
  }
  return numberArray.map( (boolean, index) => boolean ? index: boolean).
           filter( value => value > 1);
}

class Sieve {
  constructor (number) {
    this.primes = eratosthenesSieve(number);
  }
}

module.exports = Sieve;