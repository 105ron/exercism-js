const dictionary = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'stop',
  UAG: 'stop',
  UGA: 'stop',
};

function translate(RNA = '') {
  const codons = RNA.match(/[A-Z]{3}/g) || [];
  const proteins = codons.map((codon) => {
    if (dictionary[codon]) {
      return dictionary[codon];
    } else {
      throw new Error('Invalid codon');
    }
  });
  let stopCodonIndex = proteins.findIndex(element => element === 'stop');
  stopCodonIndex = stopCodonIndex < 0 ? proteins.length : stopCodonIndex;
  return proteins.slice(0, stopCodonIndex);
}

export default translate;
