const calculateRow = (rows) => {
  let previousRow = [1];
  let thisRow = [];
  const allRows = [ [ ...previousRow ] ];
  for (n = 1; n < rows; n += 1) {
    for (let i = 0; i < previousRow.length + 1; i += 1) {
      if (i === 0 || i === previousRow.length) {
        thisRow.push(1);
      } else {
        const sumNumbers = previousRow[i] + previousRow[i-1];
        thisRow.push(sumNumbers);
      }
    }
    allRows.push(thisRow);
    previousRow = [ ...thisRow ]
    thisRow = [];
  }
  return allRows;
}


const Triangle = function (numberOfRows) {
  this.rows = calculateRow(numberOfRows);
  this.lastRow = calculateRow(numberOfRows).pop()
}

module.exports = Triangle;