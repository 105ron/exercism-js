const verseEndings = (number, animal) => {
  const catching = (number) => (`She swallowed the ${ animal[number ] } to catch the ${ animal[number -1] }.\n`);
  const verseEnding = {
    1: `I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n`,
    3: `She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n`
  };
  return (number ===  1) ?  verseEnding[number] : 
    `${ verseEnding[number] || catching(number) }${ verseEndings(number -1, animal) }`;  
}

class FoodChain {
  verse(number, finish) {
    const creature = ['', `fly`, `spider`, `bird`, `cat`, `dog`, `goat`, `cow`, `horse`];
    const followingSentence = [
      '', 
      '', 
      `It wriggled and jiggled and tickled inside her.\n`,
      `How absurd to swallow a bird!\n`,
      `Imagine that, to swallow a cat!\n`,
      `What a hog, to swallow a dog!\n`,
      `Just opened her throat and swallowed a goat!\n`,
      `I don't know how she swallowed a cow!\n`,
      `She's dead, of course!\n`
    ];
    return `I know an old lady who swallowed a ${ creature[number] }.\n${ followingSentence[number] }${ (number < 8) ? verseEndings(number, creature) : '' }`;
  }

  verses (start, finish) {
    return (start === finish) ? `${this.verse(finish)}\n` :
      `${ this.verse(start) }\n${ this.verses(start +1, finish) }`;
  }
}

module.exports = FoodChain;