const sidesLegal = (one, two, three) => (one > 0 && (one + two > three));
const validTriangle = (one, two, three) => (
  sidesLegal(one, two, three) &&
  sidesLegal(two, three, one) &&
  sidesLegal(three, one, two) )
  
class Triangle {
  constructor (...sides) {
    this.triangle = sides;
  }
  
  kind () {
    const triangleSides = new Set(this.triangle);
    const unequalSides = ['', 'equilateral', 'isosceles', 'scalene']
    if (!validTriangle(this.triangle[0], this.triangle[1], this.triangle[2])) throw new error();
    return unequalSides[triangleSides.size]
  }
}

module.exports = Triangle