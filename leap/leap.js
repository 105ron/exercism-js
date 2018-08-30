class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    const normalYears = this.year % 4 === 0;
    const fourthCenturion = this.year  % 400 === 0;
    return this.year % 100 === 0 ? fourthCenturion : normalYears;
  }
}

module.exports = Year;
