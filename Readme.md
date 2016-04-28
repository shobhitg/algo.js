## About

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]

This project is about creating a NodeJS module for implementation of various computer science algorithms.

There are three additional area that needs to go on side by side with the development:
* unit tests
* documentation
* benchmarks


## Development

### Prerequisites

This project uses some ES2105 constructs and will use whatever the latest version of Nodejs 6 supports.

Therefore, please make sure you have the latest NodeJS version 6.

**To install all dev dependencies**


Call:

```bash
npm install
```

### Unit tests

**To run unit tests**

Call:

```bash
npm test
```

### Documentation

**To generate documentation**

Call:

```bash
npm run jsdoc
```

### Benchmarks

**To run benchmarks**

Currently there is only one benchmark file for sorting.

We can run it directly by calling:

```bash
./benchmarks/sortingBenchmarks.js
```

Eventually when we will have more benchmark files, we will need to have a benchmark driver to run all benchmarks altogether.


### Interesting Benchmarking results on sorting
```
Array#BubbleSort_ascending_5k x 73,287 ops/sec ±0.75% (91 runs sampled)
Array#standardSort_ascending_5k x 1,425 ops/sec ±1.31% (88 runs sampled)
Array#MergeSort_ascending_5k x 261 ops/sec ±0.89% (85 runs sampled)
Array#QuickSort_ascending_5k x 47.54 ops/sec ±0.86% (61 runs sampled)
Array#InsertionSort_ascending_5k x 63,554 ops/sec ±0.71% (94 runs sampled)
Array#HeapSort_ascending_5k x 1,411 ops/sec ±0.75% (92 runs sampled)
-------- RESULTS --------
Sorting_ascending_5k
Fastest is Array#BubbleSort_ascending_5k
Slowest is Array#QuickSort_ascending_5k
=========================
Array#BubbleSort_random_5k x 18.72 ops/sec ±0.81% (50 runs sampled)
Array#standardSort_random_5k x 534 ops/sec ±1.04% (90 runs sampled)
Array#MergeSort_random_5k x 237 ops/sec ±0.80% (84 runs sampled)
Array#QuickSort_random_5k x 2,482 ops/sec ±0.74% (94 runs sampled)
Array#InsertionSort_random_5k x 120 ops/sec ±0.70% (75 runs sampled)
Array#HeapSort_random_5k x 1,152 ops/sec ±0.82% (91 runs sampled)
-------- RESULTS --------
Sorting_random_5k
Fastest is Array#QuickSort_random_5k
Slowest is Array#BubbleSort_random_5k
=========================
Array#BubbleSort_descending_5k x 13.91 ops/sec ±0.69% (38 runs sampled)
Array#standardSort_descending_5k x 675 ops/sec ±0.76% (89 runs sampled)
Array#MergeSort_descending_5k x 264 ops/sec ±0.80% (86 runs sampled)
Array#QuickSort_descending_5k x 68.44 ops/sec ±0.69% (69 runs sampled)
Array#InsertionSort_descending_5k x 60.24 ops/sec ±0.63% (62 runs sampled)
Array#HeapSort_descending_5k x 1,456 ops/sec ±0.94% (90 runs sampled)
-------- RESULTS --------
Sorting_descending_5k
Fastest is Array#HeapSort_descending_5k
Slowest is Array#BubbleSort_descending_5k
=========================
Array#BubbleSort_ascending_100 x 3,452,503 ops/sec ±1.50% (89 runs sampled)
Array#standardSort_ascending_100 x 81,214 ops/sec ±0.78% (93 runs sampled)
Array#MergeSort_ascending_100 x 13,970 ops/sec ±0.70% (93 runs sampled)
Array#QuickSort_ascending_100 x 111,079 ops/sec ±0.76% (93 runs sampled)
Array#InsertionSort_ascending_100 x 2,802,939 ops/sec ±0.74% (92 runs sampled)
Array#HeapSort_ascending_100 x 168,107 ops/sec ±1.48% (90 runs sampled)
-------- RESULTS --------
Sorting_ascending_100
Fastest is Array#BubbleSort_ascending_100
Slowest is Array#MergeSort_ascending_100
=========================
Array#BubbleSort_random_100 x 51,749 ops/sec ±0.95% (89 runs sampled)
Array#standardSort_random_100 x 61,222 ops/sec ±0.74% (90 runs sampled)
Array#MergeSort_random_100 x 13,499 ops/sec ±0.69% (93 runs sampled)
Array#QuickSort_random_100 x 417,718 ops/sec ±1.07% (89 runs sampled)
Array#InsertionSort_random_100 x 210,463 ops/sec ±0.89% (93 runs sampled)
Array#HeapSort_random_100 x 177,248 ops/sec ±1.66% (93 runs sampled)
-------- RESULTS --------
Sorting_random_100
Fastest is Array#QuickSort_random_100
Slowest is Array#MergeSort_random_100
=========================
Array#BubbleSort_descending_100 x 34,802 ops/sec ±0.64% (95 runs sampled)
Array#standardSort_descending_100 x 75,703 ops/sec ±0.84% (91 runs sampled)
Array#MergeSort_descending_100 x 13,905 ops/sec ±0.69% (93 runs sampled)
Array#QuickSort_descending_100 x 120,488 ops/sec ±0.85% (92 runs sampled)
Array#InsertionSort_descending_100 x 130,524 ops/sec ±1.15% (89 runs sampled)
Array#HeapSort_descending_100 x 213,958 ops/sec ±1.11% (90 runs sampled)
-------- RESULTS --------
Sorting_descending_100
Fastest is Array#HeapSort_descending_100
Slowest is Array#MergeSort_descending_100
=========================
```



[npm-image]: https://img.shields.io/npm/v/algo.js.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/algo.js
[travis-image]: https://img.shields.io/travis/shobhitg/algo.js/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/shobhitg/algo.js
[gitter-image]: https://img.shields.io/gitter/room/shobhitg/algo.js.svg?style=flat-square
[gitter-url]: https://gitter.im/shobhitg/algo.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
