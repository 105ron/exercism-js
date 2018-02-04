class Proverb {
  constructor() {
    this.verbs = [...arguments]
  }

  toString() {
    const verbs = this.verbs
    const qualifier = typeof verbs[verbs.length -1] === 'object'
                      ? `${ verbs.pop().qualifier } `
                      : '';
    let result = '';
    for (let i = 0; i < verbs.length - 1; i++) {
      result += `For want of a ${ verbs[i] } the ${ verbs[i + 1] } was lost.\n`
    }
    return result += `And all for the want of a ${ qualifier }${ verbs[0] }.`;
  }
}

module.exports = Proverb;