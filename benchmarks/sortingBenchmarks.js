#!/usr/bin/env node
'use strict';
var Benchmark = require('benchmark');

var sortingTests = require('./../tests/sortingTests');

var callback = function(){};
var dummyTest = {
  deepEqual: function(){},
  done: function(){}
};

var suite = new Benchmark.Suite('Sorting_ascending_5k');
sortingTests.setUp(callback);
// add tests
suite.add('Array#BubbleSort_ascending_5k', function() {
  sortingTests.bubbleSort_ascending_5k(dummyTest);
})
.add('Array#standardSort_ascending_5k', function() {
  sortingTests.standardSort_ascending_5k(dummyTest);
})
.add('Array#MergeSort_ascending_5k', function() {
  sortingTests.mergeSort_ascending_5k(dummyTest);
})
.add('Array#QuickSort_ascending_5k', function() {
  sortingTests.quickSort_ascending_5k(dummyTest);
})
.add('Array#InsertionSort_ascending_5k', function() {
  sortingTests.insertionSort_ascending_5k(dummyTest);
})
.add('Array#HeapSort_ascending_5k', function() {
  sortingTests.heapSort_ascending_5k(dummyTest);
})
// add listeners
.on('cycle', function(event) {
 console.log(String(event.target));
})
.on('complete', function() {
  console.log('-------- RESULTS --------');
  console.log(this.name);
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('Slowest is ' + this.filter('slowest').map('name'));
  console.log('=========================');
})
// run async
.run({ 'async': false });


var suite = new Benchmark.Suite('Sorting_random_5k');
sortingTests.setUp(callback);
// add tests
suite.add('Array#BubbleSort_random_5k', function() {
  sortingTests.bubbleSort_random_5k(dummyTest);
})
.add('Array#standardSort_random_5k', function() {
  sortingTests.standardSort_random_5k(dummyTest);
})
.add('Array#MergeSort_random_5k', function() {
  sortingTests.mergeSort_random_5k(dummyTest);
})
.add('Array#QuickSort_random_5k', function() {
  sortingTests.quickSort_random_5k(dummyTest);
})
.add('Array#InsertionSort_random_5k', function() {
  sortingTests.insertionSort_random_5k(dummyTest);
})
.add('Array#HeapSort_random_5k', function() {
  sortingTests.heapSort_random_5k(dummyTest);
})
// add listeners
.on('cycle', function(event) {
 console.log(String(event.target));
})
.on('complete', function() {
  console.log('-------- RESULTS --------');
  console.log(this.name);
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('Slowest is ' + this.filter('slowest').map('name'));
  console.log('=========================');
})
// run async
.run({ 'async': false });


var suite = new Benchmark.Suite('Sorting_descending_5k');
sortingTests.setUp(callback);
// add tests
suite.add('Array#BubbleSort_descending_5k', function() {
  sortingTests.bubbleSort_descending_5k(dummyTest);
})
.add('Array#standardSort_descending_5k', function() {
  sortingTests.standardSort_descending_5k(dummyTest);
})
.add('Array#MergeSort_descending_5k', function() {
  sortingTests.mergeSort_descending_5k(dummyTest);
})
.add('Array#QuickSort_descending_5k', function() {
  sortingTests.quickSort_descending_5k(dummyTest);
})
.add('Array#InsertionSort_descending_5k', function() {
  sortingTests.insertionSort_descending_5k(dummyTest);
})
.add('Array#HeapSort_descending_5k', function() {
  sortingTests.heapSort_descending_5k(dummyTest);
})
// add listeners
.on('cycle', function(event) {
 console.log(String(event.target));
})
.on('complete', function() {
  console.log('-------- RESULTS --------');
  console.log(this.name);
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('Slowest is ' + this.filter('slowest').map('name'));
  console.log('=========================');
})
// run async
.run({ 'async': false });


var suite = new Benchmark.Suite('Sorting_ascending_100');
sortingTests.setUp(callback);
// add tests
suite.add('Array#BubbleSort_ascending_100', function() {
  sortingTests.bubbleSort_ascending_100(dummyTest);
})
.add('Array#standardSort_ascending_100', function() {
  sortingTests.standardSort_ascending_100(dummyTest);
})
.add('Array#MergeSort_ascending_100', function() {
  sortingTests.mergeSort_ascending_100(dummyTest);
})
.add('Array#QuickSort_ascending_100', function() {
  sortingTests.quickSort_ascending_100(dummyTest);
})
.add('Array#InsertionSort_ascending_100', function() {
  sortingTests.insertionSort_ascending_100(dummyTest);
})
.add('Array#HeapSort_ascending_100', function() {
  sortingTests.heapSort_ascending_100(dummyTest);
})
// add listeners
.on('cycle', function(event) {
 console.log(String(event.target));
})
.on('complete', function() {
  console.log('-------- RESULTS --------');
  console.log(this.name);
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('Slowest is ' + this.filter('slowest').map('name'));
  console.log('=========================');
})
// run async
.run({ 'async': false });


var suite = new Benchmark.Suite('Sorting_random_100');
sortingTests.setUp(callback);
// add tests
suite.add('Array#BubbleSort_random_100', function() {
  sortingTests.bubbleSort_random_100(dummyTest);
})
.add('Array#standardSort_random_100', function() {
  sortingTests.standardSort_random_100(dummyTest);
})
.add('Array#MergeSort_random_100', function() {
  sortingTests.mergeSort_random_100(dummyTest);
})
.add('Array#QuickSort_random_100', function() {
  sortingTests.quickSort_random_100(dummyTest);
})
.add('Array#InsertionSort_random_100', function() {
  sortingTests.insertionSort_random_100(dummyTest);
})
.add('Array#HeapSort_random_100', function() {
  sortingTests.heapSort_random_100(dummyTest);
})
// add listeners
.on('cycle', function(event) {
 console.log(String(event.target));
})
.on('complete', function() {
  console.log('-------- RESULTS --------');
  console.log(this.name);
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('Slowest is ' + this.filter('slowest').map('name'));
  console.log('=========================');
})
// run async
.run({ 'async': false });


var suite = new Benchmark.Suite('Sorting_descending_100');
sortingTests.setUp(callback);
// add tests
suite.add('Array#BubbleSort_descending_100', function() {
  sortingTests.bubbleSort_descending_100(dummyTest);
})
.add('Array#standardSort_descending_100', function() {
  sortingTests.standardSort_descending_100(dummyTest);
})
.add('Array#MergeSort_descending_100', function() {
  sortingTests.mergeSort_descending_100(dummyTest);
})
.add('Array#QuickSort_descending_100', function() {
  sortingTests.quickSort_descending_100(dummyTest);
})
.add('Array#InsertionSort_descending_100', function() {
  sortingTests.insertionSort_descending_100(dummyTest);
})
.add('Array#HeapSort_descending_100', function() {
  sortingTests.heapSort_descending_100(dummyTest);
})
// add listeners
.on('cycle', function(event) {
 console.log(String(event.target));
})
.on('complete', function() {
  console.log('-------- RESULTS --------');
  console.log(this.name);
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('Slowest is ' + this.filter('slowest').map('name'));
  console.log('=========================');
})
// run async
.run({ 'async': false });
