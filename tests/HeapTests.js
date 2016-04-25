'use strict';
var lib = require('./..');
var heap = lib.Heap;

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
        var output = heap.buildMaxHeap(this.input.slice());
        // console.log(this.input);
        test.deepEqual(output.slice(), this.expectedOutput);
        test.done();
    }
};
