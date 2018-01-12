const Acronym = {
  parse: (phrase) => ( 
    phrase.
      replace(/[a-z]([A-Z])/g, ' $1').
      match(/\b\w|\?<![A-Z]\B[A-Z]\B/g)
      .join('')
      .toUpperCase() )
}

module.exports = Acronym;