const pigLatin = {
  translate: (words) => {
    return words.split(' ').map( word => {
      const matches = word.match(/^([^aeioy]*qu)(.*)$/) ||
      word.match(/^(.*?)([aeiouy].*)$/)
      return matches ? matches[2] + matches[1] + "ay" : word;
    }).join(' ');
  }
}

module.exports = pigLatin;