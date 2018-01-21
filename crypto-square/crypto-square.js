class Crypto {
  constructor (string) {
    this.input = string;
  }

  normalizePlaintext () {
    return this.input.toLowerCase().match(/\w/g).join('');
  }

  size () {
    const length = this.normalizePlaintext().length;
    const cryptoSize = Math.ceil(Math.sqrt(length));
    return Math.ceil(Math.sqrt(length));
  }

  plaintextSegments () {
    const pattern =  `.{1,${ this.size() }}`;
    const re = new RegExp(pattern, 'g');
    return this.normalizePlaintext().match(re);
  }

  ciphertext() {
    const segments = this.plaintextSegments();
    let results = '';
    for ( let i = 0; i <= this.size(); i++ ) {
      segments.forEach( string => results += string.charAt(i))
    }
    return results;
  }
}

module.exports = Crypto;