const defaultStudents = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
const vegetablesDictionary = {V: 'violets', C: 'clover', R: 'radishes', G: 'grass'};

class Garden {
  constructor (code, students = defaultStudents) {
    students = students.map( e => e.toLowerCase() ).sort();
    const [rowOne, rowTwo] = code.split('\n').map(row => ( row.match(/\D{2}/g) ) ) //split into two rows, each row has elements two chars long representing plants
    const studentsPlants = rowOne.map( (plants, index) => ([...plants, ...rowTwo[index]]). //join two rows to correspond to students
                                                        map( plantChar => vegetablesDictionary[plantChar] ) ); //convert letter to plant name
    students.forEach( (student, index) => this[student] = [].concat(studentsPlants[index]) ); //build class object properties of this.studentname = [plant1, etc]
  }
}

module.exports = Garden;