//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.year = input
};

Year.prototype.isLeap = function() {
  const normalYears = this.year % 4 === 0;
  const fourthCenturion = this.year  % 400 === 0;
  return this.year % 100 === 0 ? fourthCenturion : normalYears;
};

module.exports = Year;
