function checkInRange(props) {
  return (props.start <= props.number && props.number <= props.finish);
}

function getCaseValues(characterCode, shift) {
  if (checkInRange({start: 97, finish: 122, number: characterCode})) {
    return {rangeStart: 97, modulo: 26, shiftFactor :shift}
  } else if (checkInRange({start: 65, finish: 90, number: characterCode})){
    return {rangeStart: 65, modulo: 26, shiftFactor: shift}
  } else {
    return {rangeStart: 0, modulo: characterCode + 1, shiftFactor: 0}
  }
}

class RotationalCipher {
  rotate (string, shift) {
    return string.split('').map(function(character,index) {
      let characterCode = character.charCodeAt(0);
      const {rangeStart, modulo, shiftFactor} = getCaseValues(characterCode, shift)
      characterCode = (characterCode - rangeStart + shiftFactor) % modulo + rangeStart;
      return String.fromCharCode(characterCode);
    }).join('');
  }
}

module.exports = RotationalCipher;