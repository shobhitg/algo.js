'use strict';
var lib = require('./..');
var _ = require('lodash');

var bubbleSort = lib.BubbleSort;
var standardSort = lib.StandardSort;
var mergeSort = lib.MergeSort;
var quickSort = lib.QuickSort;
var insertionSort = lib.InsertionSort;
var heapSort = lib.HeapSort;

module.exports = {
    setUp: function (callback) {
        var i = 0;
        var n = 5000;
        this.input_ascending_5k = [];
        this.input_random_5k = [];
        this.input_descending_5k = [];
        for(i = 0; i < n; i++) {
          this.input_ascending_5k.push(i);
        }
        for(i = 0; i < n; i++) {
          this.input_random_5k = _.shuffle(this.input_ascending_5k);
        }
        for(i = n-1; i >= 0; i--) {
          this.input_descending_5k.push(i);
        }
        this.expectedOutput_5k = standardSort.sort(this.input_random_5k.slice());

        var i = 0;
        var n = 100;
        this.input_ascending_100 = [];
        this.input_random_100 = [];
        this.input_descending_100 = [];
        for(i = 0; i < n; i++) {
          this.input_ascending_100.push(i);
        }
        for(i = 0; i < n; i++) {
          this.input_random_100 = _.shuffle(this.input_ascending_100);
        }
        for(i = n-1; i >= 0; i--) {
          this.input_descending_100.push(i);
        }
        this.expectedOutput_100 = standardSort.sort(this.input_random_100.slice());

        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    bubbleSort_ascending_5k: function (test) {
        var output = bubbleSort.sort(this.input_ascending_5k.slice());
        // console.log(this.input_ascending_5k);
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    mergeSort_ascending_5k: function (test) {
        var output = mergeSort.sort(this.input_ascending_5k.slice());
        // console.log(this.inout);
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    standardSort_ascending_5k: function (test) {
        var output = standardSort.sort(this.input_ascending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    quickSort_ascending_5k: function (test) {
        var output = quickSort.sort(this.input_ascending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    insertionSort_ascending_5k: function (test) {
        var output = insertionSort.sort(this.input_ascending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    heapSort_ascending_5k: function (test) {
        var output = heapSort.sort(this.input_ascending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    bubbleSort_random_5k: function (test) {
        var output = bubbleSort.sort(this.input_random_5k.slice());
        // console.log(this.input_random_5k);
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    mergeSort_random_5k: function (test) {
        var output = mergeSort.sort(this.input_random_5k.slice());
        // console.log(this.inout);
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    standardSort_random_5k: function (test) {
        var output = standardSort.sort(this.input_random_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    quickSort_random_5k: function (test) {
        var output = quickSort.sort(this.input_random_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    insertionSort_random_5k: function (test) {
        var output = insertionSort.sort(this.input_random_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    heapSort_random_5k: function (test) {
        var output = heapSort.sort(this.input_random_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    bubbleSort_descending_5k: function (test) {
        var output = bubbleSort.sort(this.input_descending_5k.slice());
        // console.log(this.input_descending_5k);
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    mergeSort_descending_5k: function (test) {
        var output = mergeSort.sort(this.input_descending_5k.slice());
        // console.log(this.inout);
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    standardSort_descending_5k: function (test) {
        var output = standardSort.sort(this.input_descending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    quickSort_descending_5k: function (test) {
        var output = quickSort.sort(this.input_descending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    insertionSort_descending_5k: function (test) {
        var output = insertionSort.sort(this.input_descending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    heapSort_descending_5k: function (test) {
        var output = heapSort.sort(this.input_descending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    bubbleSort_ascending_100: function (test) {
        var output = bubbleSort.sort(this.input_ascending_100.slice());
        // console.log(this.input_ascending_100);
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    mergeSort_ascending_100: function (test) {
        var output = mergeSort.sort(this.input_ascending_100.slice());
        // console.log(this.inout);
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    standardSort_ascending_100: function (test) {
        var output = standardSort.sort(this.input_ascending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    quickSort_ascending_100: function (test) {
        var output = quickSort.sort(this.input_ascending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    insertionSort_ascending_100: function (test) {
        var output = insertionSort.sort(this.input_ascending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    heapSort_ascending_100: function (test) {
        var output = heapSort.sort(this.input_ascending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    bubbleSort_random_100: function (test) {
        var output = bubbleSort.sort(this.input_random_100.slice());
        // console.log(this.input_random_100);
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    mergeSort_random_100: function (test) {
        var output = mergeSort.sort(this.input_random_100.slice());
        // console.log(this.inout);
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    standardSort_random_100: function (test) {
        var output = standardSort.sort(this.input_random_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    quickSort_random_100: function (test) {
        var output = quickSort.sort(this.input_random_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    insertionSort_random_100: function (test) {
        var output = insertionSort.sort(this.input_random_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    heapSort_random_100: function (test) {
        var output = heapSort.sort(this.input_random_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    bubbleSort_descending_100: function (test) {
        var output = bubbleSort.sort(this.input_descending_100.slice());
        // console.log(this.input_descending_100);
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    mergeSort_descending_100: function (test) {
        var output = mergeSort.sort(this.input_descending_100.slice());
        // console.log(this.inout);
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    standardSort_descending_100: function (test) {
        var output = standardSort.sort(this.input_descending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    quickSort_descending_100: function (test) {
        var output = quickSort.sort(this.input_descending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    insertionSort_descending_100: function (test) {
        var output = insertionSort.sort(this.input_descending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    heapSort_descending_100: function (test) {
        var output = heapSort.sort(this.input_descending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    }
};
