class Bob {
  hey(sentence) {
    const noLowerCase = !/[a-z]/.test(sentence);
    const upperCase = /[A-Z]/.test(sentence);
    const yelling = upperCase && noLowerCase;
    const nonWhiteSpace = sentence.match(/\S/g);
    //check it is Array before slicing for when sentence is all whitespace
    const question = Array.isArray(nonWhiteSpace) && (nonWhiteSpace.slice(-1)[0]) === '?';
    const nothingSaid = !Boolean(nonWhiteSpace);

    //There must be a better way to do this part
    if (yelling) return 'Whoa, chill out!';
    if (question) return 'Sure.';
    if (nothingSaid) return 'Fine. Be that way!';
    return 'Whatever.'
  }
}

module.exports = Bob;