class BeerSong {
  verse(bottles) {
    const manyBottles = number => `${ number } bottles of beer on the wall, ${ number } bottles of beer.\nTake one down and pass it around, ${ number - 1 } bottles of beer on the wall.\n`;
    const verses = {
      2: '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n',
      1: '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n',
      0:  `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
    }
    return verses[bottles] ||  manyBottles(bottles);
  }

  sing(start, finish = 0) {
    let song = ''
    for (let i = start; i >= finish; i -= 1) 
      song += `${ this.verse(i)}\n`;
    return song.substring(0, song.length - 1);
  }
}

module.exports = BeerSong;