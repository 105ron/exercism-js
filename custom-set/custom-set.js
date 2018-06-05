Array.prototype.empty = function(){
  return this.every(function(value) {return value === false});
}

Array.prototype.not = function(callback) {
  return this.filter(function () {
      return !callback.apply(this, arguments);
  });
};

function includesValue (value) {
  return this.set.includes(value);
}


class CustomSet {
  constructor (input = []) {
    this.set = input;
  }

  empty () {
    return this.set.empty();
  }

  contains (element) {
    return this.set.includes(element);
  }

  subset (setTwo) {
    return setTwo.set.every(includesValue.bind(this))
  }

  disjoint (setTwo) {
    if (this.set.empty() || setTwo.set.empty()) return true;
    return !setTwo.set.some(includesValue.bind(this))
  }

  eql (setTwo) {
    return setTwo.set.every(includesValue.bind(this)) &&
           this.set.every(includesValue.bind(setTwo));
  }

  add (value) {
    if (!this.set.includes(value)) {
      this.set.push(value);
    }
    return this;
  }

  intersection (setTwo) {
    this.set = this.set.filter(includesValue.bind(setTwo));
    return this;
  }

  difference (setTwo) {
    this.set = this.set.not(includesValue.bind(setTwo));
    return this;
  }

  union (setTwo) {
    const uniqueValues = setTwo.set.not(includesValue.bind(this));
    uniqueValues.forEach(function (value) {
      this.set.push(value);
    }.bind(this));
    return this;
  }

  clear () {
    this.set = [];
    return this;
  }

  size () {
    const set = new Set(this.set)
    return set.size;
  }

  toList () {
    this.set = Array.from(new Set(this.set));
    return this.set;
  }
}

module.exports = CustomSet;