const checkValid = number => {
  //cut the leading one off if it has one.
  number = /^1/.test(number) ? number.slice(1) : number;
  //the 1st and 4th number are our area codes
  const areaDigits = `${ number.slice(0,1) }${ number.slice(3,4) }`;
  //make sure they are not 0 or 1
  number = /[0-1]/.test(areaDigits) ? 'failed' : number;
  //make sure we have the correct amount of digits
  return (number.length === 10) ? number : null
}

class PhoneNumber {
  constructor (number) {
    this.phoneNumber = number;
  }
  number () {
    //strip non digits and send to check valid function
    return checkValid(this.phoneNumber.replace(/\D/g, ''));
  }
}

module.exports = PhoneNumber;