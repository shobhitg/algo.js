'use strict';
var lib = require('./..');
var Heap = lib.Heap;

module.exports = {
    setUp: function (callback) {
        this.input          = [ 4, 1, 3, 2, 16, 9, 10, 14, 8, 7 ];
        this.expectedOutput = [ 16, 14, 10, 8, 7, 9, 3, 2, 4, 1 ];
        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    buildMaxHeapTest: function (test) {
      var heap = new Heap(this.input);
        var output = Heap.buildMaxHeap(heap);
        // console.log(this.input);
        test.deepEqual(output.data, this.expectedOutput);
        test.done();
    }
};
