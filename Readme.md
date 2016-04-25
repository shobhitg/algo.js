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

This project uses some ES2105 constructs and will use whatever the latest version of Nodejs 5 supports.

Therefore, please make sure you have the latest NodeJS version 5.

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


[npm-image]: https://img.shields.io/npm/v/algo.js.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/algo.js
[travis-image]: https://img.shields.io/travis/shobhitg/algo.js/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/shobhitg/algo.js
[gitter-image]: https://img.shields.io/gitter/room/shobhitg/algo.js.svg?style=flat-square
[gitter-url]: https://gitter.im/shobhitg/algo.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
