const appendArray = (arrayOne, arrayTwo) => {
  arrayTwo.forEach( element => arrayOne.push(element))
  return arrayOne;
}

const filterArray = (array, callback) => {
  const filteredArray = [];
  array.forEach( element => {
    if (callback(element)) {
      filteredArray.push(element);
    }
  })  
  return filteredArray;
}

const mapArray = (array, callback, initialValue) => {
  const mappedArray = [];
  array.forEach( element => mappedArray.push( callback(element) ) );
  return mappedArray;
}

const reduceArray = (array, callback, initialValue) => {
  let reducedValue = initialValue;
  array.forEach( element => reducedValue = callback(element, reducedValue) );
  return reducedValue;
}

const reversedArray = array => {
  const reversedArray = [];
  array.forEach( element => reversedArray.unshift(element) );
  return reversedArray;
}

class List {
  constructor (input = []) {
    this.values = input
  }
  append (array) {
    this.values = appendArray(this.values, array.values);
    return this
  }

  concat (list) {
    this.values = appendArray(this.values, list.values)
    return this;
  }

  filter (callback) {
    this.values = filterArray(this.values, callback);
    return this;
  }

  length () {
    let i = 0;
    this.values.forEach( element => i++)
    return i;
  }

  map (callback) {
    this.values = mapArray(this.values, callback)
    return this;
  }

  foldl (callback, initialValue) {
    return reduceArray(this.values, callback, initialValue);
  }

  foldr (callback, initialValue) {
    return reduceArray(this.values.reverse(), callback, initialValue);
  }

  reverse () {
    this.values = reversedArray(this.values);
    return this;
  }
}


module.exports = List;