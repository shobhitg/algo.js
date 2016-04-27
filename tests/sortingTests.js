'use strict';
var lib = require('./..');
var _ = require('lodash');

var BubbleSort = lib.BubbleSort;
var StandardSort = lib.StandardSort;
var MergeSort = lib.MergeSort;
var QuickSort = lib.QuickSort;
var InsertionSort = lib.InsertionSort;
var HeapSort = lib.HeapSort;
var Heap = lib.Heap;

module.exports = {
    setUp: function (callback) {
        var i = 0;
        var n = 5;
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
        this.expectedOutput_5k = StandardSort.sort(this.input_random_5k.slice());

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
        this.expectedOutput_100 = StandardSort.sort(this.input_random_100.slice());

        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    bubbleSort_ascending_5k: function (test) {
        var output = BubbleSort.sort(this.input_ascending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    mergeSort_ascending_5k: function (test) {
        var output = MergeSort.sort(this.input_ascending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    standardSort_ascending_5k: function (test) {
        var output = StandardSort.sort(this.input_ascending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    quickSort_ascending_5k: function (test) {
        var output = QuickSort.sort(this.input_ascending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    insertionSort_ascending_5k: function (test) {
        var output = InsertionSort.sort(this.input_ascending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    heapSort_ascending_5k: function (test) {
        var heap = new Heap(this.input_ascending_5k.slice());
        var output = HeapSort.sort(heap);
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    bubbleSort_random_5k: function (test) {
        var output = BubbleSort.sort(this.input_random_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    mergeSort_random_5k: function (test) {
        var output = MergeSort.sort(this.input_random_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    standardSort_random_5k: function (test) {
        var output = StandardSort.sort(this.input_random_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    quickSort_random_5k: function (test) {
        var output = QuickSort.sort(this.input_random_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    insertionSort_random_5k: function (test) {
        var output = InsertionSort.sort(this.input_random_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    heapSort_random_5k: function (test) {
        var heap = new Heap(this.input_random_5k.slice());
        var output = HeapSort.sort(heap);
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    bubbleSort_descending_5k: function (test) {
        var output = BubbleSort.sort(this.input_descending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    mergeSort_descending_5k: function (test) {
        var output = MergeSort.sort(this.input_descending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    standardSort_descending_5k: function (test) {
        var output = StandardSort.sort(this.input_descending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    quickSort_descending_5k: function (test) {
        var output = QuickSort.sort(this.input_descending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    insertionSort_descending_5k: function (test) {
        var output = InsertionSort.sort(this.input_descending_5k.slice());
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    heapSort_descending_5k: function (test) {
        var heap = new Heap(this.input_descending_5k.slice());
        var output = HeapSort.sort(heap);
        test.deepEqual(output, this.expectedOutput_5k);
        test.done();
    },
    bubbleSort_ascending_100: function (test) {
        var output = BubbleSort.sort(this.input_ascending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    mergeSort_ascending_100: function (test) {
        var output = MergeSort.sort(this.input_ascending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    standardSort_ascending_100: function (test) {
        var output = StandardSort.sort(this.input_ascending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    quickSort_ascending_100: function (test) {
        var output = QuickSort.sort(this.input_ascending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    insertionSort_ascending_100: function (test) {
        var output = InsertionSort.sort(this.input_ascending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    heapSort_ascending_100: function (test) {
        var heap = new Heap(this.input_ascending_100.slice());
        var output = HeapSort.sort(heap);
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    bubbleSort_random_100: function (test) {
        var output = BubbleSort.sort(this.input_random_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    mergeSort_random_100: function (test) {
        var output = MergeSort.sort(this.input_random_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    standardSort_random_100: function (test) {
        var output = StandardSort.sort(this.input_random_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    quickSort_random_100: function (test) {
        var output = QuickSort.sort(this.input_random_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    insertionSort_random_100: function (test) {
        var output = InsertionSort.sort(this.input_random_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    heapSort_random_100: function (test) {
        var heap = new Heap(this.input_random_100.slice());
        var output = HeapSort.sort(heap);
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    bubbleSort_descending_100: function (test) {
        var output = BubbleSort.sort(this.input_descending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    mergeSort_descending_100: function (test) {
        var output = MergeSort.sort(this.input_descending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    standardSort_descending_100: function (test) {
        var output = StandardSort.sort(this.input_descending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    quickSort_descending_100: function (test) {
        var output = QuickSort.sort(this.input_descending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    insertionSort_descending_100: function (test) {
        var output = InsertionSort.sort(this.input_descending_100.slice());
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    },
    heapSort_descending_100: function (test) {
        var heap = new Heap(this.input_descending_100.slice());
        var output = HeapSort.sort(heap);
        test.deepEqual(output, this.expectedOutput_100);
        test.done();
    }
};
