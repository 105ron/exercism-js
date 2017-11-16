class SecretHandshake {
  constructor (number) {
    if (isNaN(number)) throw new Error('Handshake must be a number');
    this.code = number
    this.reponses = {
      3: 'wink',
      2: 'double blink',
      1: 'close your eyes',
      0: 'jump'
    }
  }

  convertToBinaryArray () {
    //convert decimal to binary
    const binaryString = this.code.toString(2);
    //pad the front of the string if needed and convert to array
    return binaryString.padStart(4, "0").split('');
  }

  commands () {
    let reverseOrder = false;
    const binaryArray = this.convertToBinaryArray();
    if (binaryArray.length === 5) {
      //This is for '10000' and we remove the leading '1' so as to not throw out the index on the dictionary
      binaryArray.shift();
      reverseOrder = true;
    }
    const responses = [];
    binaryArray.forEach( (number, index) => {
      if (number == 1) responses.unshift(this.reponses[index]);
    });
    return reverseOrder ? responses.reverse() : responses;
  }
}

module.exports = SecretHandshake;