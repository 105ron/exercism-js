const calculateRow = (rows) => {
  let previousRow = [1];
  let thisRow = [];
  let newLength = 2
  const allRows = [ [ ...previousRow ] ];
  for (n = 1; n < rows; n += 1) {
    for (let i = 0; i < newLength; i += 1) {
      if (i === 0 || i === (newLength) -1) {
        thisRow.push(1);
      } else {
        const sumNumbers = previousRow[i] + previousRow[i-1];
        thisRow.push(sumNumbers);
      }
    }
    allRows.push(thisRow);
    previousRow = [ ...thisRow ]
    thisRow = [];
    newLength += 1;
  }
  return allRows;
}


const Triangle = function (numberOfRows) {
  this.rows = calculateRow(numberOfRows);
  this.lastRow = calculateRow(numberOfRows).pop()
}

module.exports = Triangle;