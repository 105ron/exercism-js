const dictionary = {
  ' _ | ||_|': '0',
  '     |  |': '1',
  ' _  _||_ ': '2',
  ' _  _| _|': '3',
  '   |_|  |': '4',
  ' _ |_  _|': '5',
  ' _ |_ |_|': '6',
  ' _   |  |': '7',
  ' _ |_||_|': '8',
  ' _ |_| _|': '9'
};

function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
      return a.map(function (r) {
          return r[c];
      });
  });
};

function convertToDecimal (number) {
  const numberRows = number.split(/\n/g) //split rows
    const numberColumms = numberRows.map( x => x.match(/.{3,3}/g) ) //make rows into 3 character long groups
    const numbers = transpose(numberColumms.slice(0,3)) //slice to remove white space on bottom
    return numbers.reduce(function (accum, current) {
      return accum + ( dictionary[current.join('')] || '?') //join the existing string with the current look up
    }, '' );
};

const ocr = {
  convert: function (number) {
    const numbersBlock = number.split('         \n') //split  large spaces into arrays
    return numbersBlock.map( block => convertToDecimal(block)).join(',');
  }
};

module.exports = ocr;