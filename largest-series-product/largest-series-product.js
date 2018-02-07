const maxSeries = series => (Math.max(...series.map( numbers => 
  [...numbers].reduce( (accumulator, current) => 
    accumulator * current, 1) ) ))

const invalidInput = (series, size) => /\D/.test(series) || //non digit characters
                                       size < 0; //negative span lengths

class Series {
  constructor (number) {
    this.series = number;
  }

  largestProduct (size) {
    const series = [];
    if (size > this.series.length) throw new Error('Slice size is too big.')
    if (invalidInput(this.series, size)) throw new Error('Invalid input.')
    //creates all possible series for span length
    for (let i = 0; i + size <= this.series.length; i++){ 
      series.push(this.series.substring(i, i + size))
    }
    return maxSeries(series);
  }
}

module.exports = Series;