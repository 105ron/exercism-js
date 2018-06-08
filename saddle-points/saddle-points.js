Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

function saddlePoints (rows, columns) {
  const saddlePoints = [];
  rows.forEach(function(row, index) {
    const rowMaxValue = row.max();
    const rowMaxIndex = row.findIndex( n =>  n == rowMaxValue );
    const column = columns[rowMaxIndex];
    if (column.min() === rowMaxValue) {
      saddlePoints.push([index, rowMaxIndex]);
    }
  });
  return saddlePoints;
}

function matrix (input) {
  const array = input.split(/\n/g).map(str => str.match(/\S{1,}/g) );
  this.rows = array.map( r => r.map( n => parseInt(n) ) );
  this.columns = transpose(this.rows);
  this.saddlePoints = saddlePoints(this.rows, this.columns);

  function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
      return a.map( r => r[c] );
    });
  }  

}

module.exports = matrix;