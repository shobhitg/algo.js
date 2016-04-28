'use strict';
var lib = require('./..');
var _ = require('lodash');
var BST = lib.BST;
var BSTNode = lib.BSTNode;

module.exports = {
  setUp: function(callback) {
    this.bst = new BST();
    for (let i = 0; i < 10; i++) {
      let bstNode = new BSTNode(_.random(0, 500));
      BST.treeInsert(this.bst, bstNode);
    }
    callback();
  },
  tearDown: function(callback) {
    // clean up
    callback();
  },
  inOrderTreeWalkTest: function(test) {
    BST.inOrderTreeWalk(this.bst.root);
    // test.deepEqual(output.data, this.expectedOutput);
    test.done();
  }
};