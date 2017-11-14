class LinkedList {
  constructor () {
    this.list = [];
  }

  push (item) {
    this.list.push(item);
  }

  pop () {
    return this.list.pop();
  }

  shift () {
    return this.list.shift();
  }

  unshift (item) {
    this.list.unshift(item);
  }

  count () {
    return this.list.length;
  }

  delete (item) {
    const index = this.list.findIndex( element => (element === item) );
    this.list.splice(index, 1);
  }
}

module.exports = LinkedList;