var Matrix = function(matrix) {
  this.rows = matrix.split("\n").map( row => (
    row.split(" ").map(parseFloat)));
  this.columns = Object.keys(this.rows[0]).map( function(colNum) {
    return this.map( row =>  ( row[colNum] ) );
    }, this.rows);
}

module.exports = Matrix;