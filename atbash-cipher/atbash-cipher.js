const aToZ = Array(26).fill().map((_, idx) => String.fromCharCode(97 + idx)); //array of letters
const zToA = [...aToZ].reverse();

const atbash = {
  encode: (string) => ( string.toLowerCase().
      match(/\w/g). //strip whitepace
      map( character => ( aToZ.includes(character) ? //check it's not a number
      zToA[aToZ.findIndex( encodedCharacter => encodedCharacter === character)] //encode letter
    : character ) ). //return number
      join('').replace(/(\w{5})/g, '$1 ').trim() //convert to string and add whitespace
  )
}

module.exports = atbash;