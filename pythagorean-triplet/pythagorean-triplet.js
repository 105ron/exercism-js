const filterParams = params => {
  return ([[3, 4, 5], [6, 8, 10]])
}

class Triplet { 
  constructor (sideOne, sideTwo, sideThree) {
    this.a = sideOne;
    this.b = sideTwo;
    this.c = sideThree;
  }

  sum () {
    return this.a + this.b + this.c;
  }

  product () {
    return this.a * this.b * this.c;
  }

  isPythagorean () {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }
  
  static where (query) {
    const min = query.minFactor || 1;
    const max = query.maxFactor || 100;
    const sum = query.sum;
    const triplets = [];
    for (let a = min; a <= max; a++) {
      for (let b = a; b <= max; b++) {
        for (let c = b; c <= max; c++) {
          let triplet = new Triplet(a, b, c);
          if (triplet.isPythagorean() && (!sum || triplet.sum() == sum))
            triplets.push(triplet);
        }
      }
    }
    return triplets;
  }
}

module.exports = Triplet;