class ETL {
  transform (old) {
    const transform = {};
    Object.keys(old).forEach( (key,index) => {
      old[key].forEach( letter => {
        transform[letter.toLowerCase()] = parseInt(key);
      });
    });
    return transform
  }
}

module.exports = ETL;


