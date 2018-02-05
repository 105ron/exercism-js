class Flattener {
  flatten (array) {
    let nested = true;
    while (nested) {  
      array = [].concat.apply([], array)
      if ( array.every( element => !Array.isArray(element) ) ) nested = false;
    }
    return array.filter( element => element !== null );
  }
}

module.exports = Flattener;