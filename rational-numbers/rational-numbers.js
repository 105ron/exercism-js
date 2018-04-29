function greatestCommonDenominator(a, b) {
  if ( ! b) {
      return a;
  }
  return greatestCommonDenominator(b, a % b);
};

function lowestTerm(rational) {
  const denomintor = greatestCommonDenominator(rational.a, rational.b)
  rational.a /= denomintor;
  rational.b /= denomintor;
  return [rational.a, rational.b]
}

function addSubtract( rationalOne, rationalTwo, operator) {
    rationalOne.a = eval(`rationalOne.a * rationalTwo.b ${operator} rationalTwo.a * rationalOne.b`);
    rationalOne.b = rationalOne.b * rationalTwo.b;
    rationalOne.b = rationalOne.a === 0 ? 1 : rationalOne.b;
    return [rationalOne.a, rationalOne.b];
}

function negativeDenominator (rational) {
  if (rational.b < 0) {
    rational.a *= -1;
    rational.b *= -1;
  }
  return [rational.a, rational.b];
}

class Rational {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(rational) {
    [this.a, this.b] = addSubtract(this, rational, '+')
    return this;
  }

  sub(rational) {
    [this.a, this.b] = addSubtract(this, rational, '-')
    return this;
  }

  mul(rational) {
    this.a = this.a * rational.a;
    this.b = this.b * rational.b;
    [this.a, this.b] = lowestTerm(this);
    if (this.b < 0) {
      this.a *= -1;
      this.b *= -1;
    }
    return this;
  }

  div(rational) {
    this.a = this.a * rational.b;
    this.b = rational.a * this.b;
    [this.a, this.b] = negativeDenominator(this);
    return this;
  }

  abs() {
    if (this.a < 0) this.a *= -1;
    return this;
  }

  exprational(exp) {
    if (exp === 0) {
      this.a = 1;
      this.b = 1;
    }
    this.b = this.b ** exp;
    return this;
  }

  expreal(exp) {
    const numerator = Math.pow(exp, this.a);
    return this.b === 3 ? Math.cbrt(numerator) : Math.sqrt(numerator);
  
  }

  reduce () {
    lowestTerm(this);
    [this.a, this.b] = negativeDenominator(this);
    return this;
  }
}

module.exports = Rational;