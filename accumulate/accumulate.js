const accumulate = (array, callback) => {
  const accumulate = []
  array.forEach( (element, index) => accumulate[index] = callback(element) );
  return accumulate;
}

module.exports = accumulate;