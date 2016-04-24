var lib = require('./..');
var bubbleSort = new lib.BubbleSort();
var standardSort = new lib.StandardSort();
var mergeSort = new lib.MergeSort();
var quickSort = new lib.QuickSort();
var insertionSort = new lib.InsertionSort();

module.exports = {
    setUp: function (callback) {
        // this.input          = [ 5, 3, 8, 30, 4, 6, 8, 1 ];
        // this.expectedOutput = [ 1, 3, 4, 5, 6, 8, 8, 30 ];
        // this.input          = [ 2, 8, 7, 1, 3, 5, 6, 4];
        // this.expectedOutput = [ 1, 2, 3, 4, 5, 6, 7, 8];
        var i = 0;
        var n = 5000;
        this.input = [];
        for(i = 0; i < n; i++) {
          this.input.push(Math.round(Math.random()*1000))
        }
        this.expectedOutput = standardSort.sort(this.input.slice());

        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    bubbleSortTest: function (test) {
        var output = bubbleSort.sort(this.input.slice());
        // console.log(this.input);
        test.deepEqual(output, this.expectedOutput);
        test.done();
    },
    mergeSortTest: function (test) {
        var output = mergeSort.sort(this.input.slice());
        // console.log(this.inout);
        test.deepEqual(output, this.expectedOutput);
        test.done();
    },
    standardSortTest: function (test) {
        var output = standardSort.sort(this.input.slice());
        test.deepEqual(output, this.expectedOutput);
        test.done();
    },
    quickSortTest: function (test) {
        var output = quickSort.sort(this.input.slice());
        test.deepEqual(output, this.expectedOutput);
        test.done();
    },
    insertionSortTest: function (test) {
        var output = insertionSort.sort(this.input.slice());
        test.deepEqual(output, this.expectedOutput);
        test.done();
    }
};
