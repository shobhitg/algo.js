#!/usr/bin/env node
'use strict';
var Benchmark = require('benchmark');

var sortingTests = require('./../tests/sortingTests');

var callback = function(){};
var dummyTest = {
  deepEqual: function(){},
  done: function(){}
};

var suite = new Benchmark.Suite();

sortingTests.setUp(callback);
// add tests
suite.add('Array#BubbleSort', function() {
  sortingTests.bubbleSortTest(dummyTest);
})
.add('Array#standardSortTest', function() {
  sortingTests.standardSortTest(dummyTest);
})
.add('Array#MergeSortTest', function() {
  sortingTests.mergeSortTest(dummyTest);
})
.add('Array#QuickSortTest', function() {
  sortingTests.quickSortTest(dummyTest);
})
.add('Array#InsertionSortTest', function() {
  sortingTests.insertionSortTest(dummyTest);
})
// add listeners
.on('cycle', function(event) {
 console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('Slowest is ' + this.filter('slowest').map('name'));
})
// run async
.run({ 'async': false });
