class Words {
  count (sentence) {
    const dictionary = Object.create(null);
    sentence.toLowerCase().
      replace(/^\t+|\s{2,}$|:/g, '').
      split(/\s+|,/g).
      map( word => word.replace(/^'|'$|\.|!|&|@|\$|%|\^|&|¿|¡|\?/g, '')).
      forEach( word => {
        dictionary[word] = dictionary[word] +1 || 1;
      });
    return dictionary;
  }
}

module.exports = Words;