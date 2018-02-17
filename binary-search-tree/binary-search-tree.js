function addValues(data) {
  return {data, left: undefined, right: undefined}
}

class Node {
  constructor (value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}


class Bst {
  constructor (value) {
    const node = new Node(value)
    this.data = node.data;
    this.left = node.left;
    this.right = node.right;
  }

  insert (value) {
    const root = this.data;
    const newNode = new Node(value); 
    let currentNode = this;

    while (currentNode) {
      if (value <= currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if(!currentNode.right){
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  each (callback, node = this) {
    if (node.left) {
      this.each(callback, node.left);
    } 
    callback(node.data);
    if (node.right) {
      this.each(callback, node.right);
    }
  }

}

module.exports = Bst;