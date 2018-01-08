class PerfectNumbers {
  classify (number) {
    let factorialSum = 0;
    if (number < 1) return 'Classification is only possible for natural numbers.'
    for (let i = 1; i < (number / 2 +1); i ++) {
      if (number % i === 0) factorialSum += i
    }
    if (factorialSum < number || number === 1) return 'deficient';
    if (factorialSum === number) return 'perfect';
    if (factorialSum > number) return 'abundant';
  }
}

module.exports = PerfectNumbers;