const checkValidity = number => (
  number.reverse().
         map( (char, index) => index % 2 === 0 ? Number(char) * 2 : Number(char) ).
         reduce( (accumulator, current) => accumulator + (current > 9 ? current - 9: current) ) % 10 === 0) ;

class Luhn {
  constructor (number) {
    this.valid = parseInt(number) > 0 && checkValidity((number).match(/\S/g));
  }
}

module.exports = Luhn;