let robotNamesCollection = new Set()

class Robot {
  constructor () {
    this.name = this.createName();
  }

  createName () {
    let letters, numbers;
    const randomNumber = (number = 25) => (Math.round(Math.random() * number));
    const alphabetArray = Array(26).fill().map((_, i) => String.fromCharCode(i+65));
    const newName = () => `${letters}${numbers}`;
    do {
      letters = alphabetArray[randomNumber()]+ alphabetArray[randomNumber()];
      numbers = randomNumber(1000).toString().padStart(3, '0');
    } while (robotNamesCollection.has(newName()));
    robotNamesCollection.add(newName());
    return newName();
  }

  reset () {
    this.name = this.createName();
  }
}

module.exports = Robot;