function equalArrays (arrayOne, arrayTwo) {
  return arrayOne.every( (value, index) => (
    value === arrayTwo[index] ) &&
    arrayOne.length === arrayTwo.length );
}

function binarySearch (array, value) {
  let lower = 0;
  let middle;
  let upper = array.length - 1;
  while (lower <= upper) {
    middle = Math.floor((upper + lower) / 2);
    if (array[middle] === value) {
      return middle;
    } else if (array[middle] < value) {
      lower = middle + 1;
    } else {
      upper = middle - 1;
    }
  }
  return -1;
}



class BinarySearch {
  constructor (array) {
    const sortedArray = [...array].sort((a, b) => a - b);
    const inputSorted = equalArrays(array, sortedArray);
    this.array = inputSorted ? array : undefined;
  }

  indexOf (value) {
    return binarySearch(this.array, value); 
  }
}

module.exports = BinarySearch;