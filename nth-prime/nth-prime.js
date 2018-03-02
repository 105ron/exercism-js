function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
      if (number % start++ < 1) return false;
  }
  return number > 1;
}

const prime = {
  nth: function (primesNumber) {
    if (primesNumber === 0) throw new Error('Prime is not possible');
    let primesArray = [];
    for (let i = 2; primesArray.length < primesNumber; i++) {
      if (isPrime(i)) primesArray.push(i);
    }
    return primesArray.pop()
  }
}

module.exports = prime;