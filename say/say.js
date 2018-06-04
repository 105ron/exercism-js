const digitsDictionary = {
  0: '',
  1: 'one ',
  2: 'two ',
  3: 'three ',
  4: 'four ',
  5: 'five ',
  6: 'six ',
  7: 'seven ',
  9: 'nine ',
  14: 'fourteen '
}

const tensDictonary = {
  0: '',
  2: 'twenty-',
  3: 'thirty-',
  4: 'forty-',
  5: 'fifty-',
  8: 'eighty-'
}

function numberToWord (number) {
  if (!number) return '';
  const hundreds = ~~(number / 100);
  const remainders = ~~(number - hundreds * 100);
  const tens = remainders > 19 ? ~~(remainders / 10) : 0; //nineteen and below will be dealt with in the digits dictionary
  const digits = (tens > 0) ? remainders - tens * 10 : remainders;
  const word = `${digitsDictionary[hundreds]}${hundreds >=1 ? 'hundred ' : ''}${tensDictonary[tens]}${digitsDictionary[digits]}`.trim();
  return word.replace(/\s$|[-]$/, '');
}

const powersDictionary = [' billion ', ' million ', ' thousand ', ''];
  
const say =  {
  inEnglish: function (number) {
    if (number === 0) return 'zero'
    if (number < 0 || number > 999999999999) throw new Error('Number must be between 0 and 999,999,999,999.')
    const numberArray = number.toString().
                        padStart(12).
                        match(/.{1,3}/g).map( //split into groups of three
                          function(number) {
                            return parseInt(number)
                        });
    return numberArray.reduce(function(accumulator, current, index) {
      return accumulator += `${numberToWord(current)}${current > 0 ? powersDictionary[index]: ''}`;
    }, '').replace(/\s$|[-]$/, '');
  }
}

module.exports = say;