const primeFactors  = {
  for (number) { 
    let primesArray = [];
    let divisor = 2;
    while (number > 1) {
      if (number % divisor === 0) {
        primesArray.push(divisor);
        number /= divisor;
        divisor = 2;
      } else {
        divisor += 1
      }
    }
    return primesArray;
  }
}
module.exports = primeFactors;