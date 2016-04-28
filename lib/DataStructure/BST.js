'use strict';
/**
 * The Binary Search Tree
 */

class BSTNode {
  constructor(key, left = null, right = null, parent = null, data = null) {
    this.key = key;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.data = data;
  }
}
class BST {
  constructor(root = null) {
    this.root = root;
  }
  static inOrderTreeWalk(node) {
    if (node.left) {
      this.inorderTreeWalk(node.left);
    }
    console.log(node.key);
    if (node.right) {
      this.inorderTreeWalk(node.right);
    }
  }
  static treeInsert(tree, newNode) {
    console.log(JSON.stringify(newNode));
    var y = null;
    var x = tree.root;
    while (x !== null) {
      y = x;
      if (newNode.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    newNode.parent = y;
    if (y === null) {
      tree.root = newNode;
    } else if (newNode.key < y.key) {
      y.left = newNode;
    } else {
      y.right = newNode;
    }
  }
}

module.exports = {
  BST: BST,
  BSTNode: BSTNode
};