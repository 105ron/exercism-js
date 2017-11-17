class School {
  constructor () {
    this.schoolRoll = {};
  }

  add (student, grade) {
    if (this.schoolRoll.hasOwnProperty(grade)) {
      this.schoolRoll[grade].push(student);
      this.schoolRoll[grade].sort();
    } else {
      this.schoolRoll[grade]= [ student ];
    }
  }

  grade (year) {
    return this.schoolRoll[year] || [];
  }

  roster () {
    return this.schoolRoll;
  }

}

module.exports = School;