class List {
  constructor(array = []) {
    this.array = array;
  }
  toString() {
    return this.array.join(',');
  }
  compare(list) {
    const list1 = this.toString();
    const list2 = list.toString();

    if (list2 === list1) return 'EQUAL';
    return new RegExp(list1).test(list2)
      ? 'SUBLIST'
      : new RegExp(list2).test(list1) ? 'SUPERLIST' : 'UNEQUAL';
  }
}

module.exports = List;