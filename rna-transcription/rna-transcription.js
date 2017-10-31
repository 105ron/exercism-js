class DnaTranscriber {
  toRna (dna) {
    const dnaToRna = {
      C: 'G',
      G: 'C',
      A: 'U',
      T: 'A'
    }
    const dnaArray = dna.split('');
    const rnaArray = dnaArray.map( element => {
      if (dnaToRna[element]) {
        return dnaToRna[element];
      } else {
        throw new Error('Invalid input')
      }
    });
    return rnaArray.join('');
  }
}

module.exports = DnaTranscriber;