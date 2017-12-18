class Hamming {
  compute (dnaOne, dnaTwo) {
    if (dnaOne.length !== dnaTwo.length) throw new Error('DNA strands must be of equal length.')
    let mutations = 0;
    dnaOne.split('').forEach( (element,index) => {
      if (element !== dnaTwo[index]) mutations += 1;
    });
    return mutations;
  }
}

module.exports = Hamming;