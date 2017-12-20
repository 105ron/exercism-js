const RLE = {
  encode: (string) => {
    return string.split('').reduce( (acc, curr, index, arr) => {
      let count = 1;
      while(curr === arr[index + count]) count++;
      return acc += (acc.substr(-1) !== curr)
        ? (count > 1) ? count + curr : curr
        : '';
    },'');
  },
  
  decode: (string) => {
    const stringArray = /\D|\d+/g[Symbol.match](string) || []; //Array of numbers and character split up
    let decodeString = ''
    let i = 0;
    while (i < stringArray.length) {
      const char = stringArray[i];
      const charNumber = parseInt(char)
      if (charNumber) {
        decodeString += stringArray[i + 1].repeat(charNumber)
        i += 2; //skip the next character
      } else {
        //this is for single character without repeats
        decodeString += char;
        i += 1
      }
    }
    return decodeString;
  }
}

module.exports = RLE;