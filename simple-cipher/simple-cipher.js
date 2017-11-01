class Cipher {
  constructor(key) {
    this.key = this.setKey(key);
  }

  setKey(key) {
    const regEx = /[A-Z0-9]/;
    if (regEx.test(key) || key === '') {
      throw new Error('Bad key');
    }
    return key || 'easycipher'; //dummy cipher for when none is passed in test suite
  }

  encrypt(chars, reverse) {
    const correctionFactor = reverse ? 26 : -26;
    let shift;
    let thisCharsShiftedCode;
    return String.fromCharCode.apply(null,
        chars.split('').map( (currentChar, i) => {
            //i % this.key.length so if key is smaller than the chars string it repeats the key
            shift = this.key[i % this.key.length].charCodeAt();
            //turn shift into a number between 0-25 which represents a-z shift factor
            shift = (shift -97);
            if(reverse) shift = -shift;
            thisCharsShiftedCode = currentChar.charCodeAt() + shift;
            //Using a-z as our shift, this turns our shift into 97 < shift < 122 in the encrypted cipher
            //is outside the a-z character range
            if ((thisCharsShiftedCode < 97) || (thisCharsShiftedCode > 122)) {
              thisCharsShiftedCode += correctionFactor
            }
            return (thisCharsShiftedCode);
        })
    );
    return chars;
  }

  encode(chars) {
    return this.encrypt(chars, false)
  }

  decode(chars) {
    return this.encrypt(chars, true);
  }

}

module.exports = Cipher;


