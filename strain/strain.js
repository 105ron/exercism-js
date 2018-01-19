const test = (array, callback) => {
  const results = [];
  array.forEach( value => { 
    if (callback(value)) results.push(value) 
  });
  return results;
}

const strain =  {
  keep: (array, callback) => {
    return test(array, callback);
  },
  discard: (array, callback) => {
    return test(array, x => !callback(x));
  }
}

module.exports = strain;