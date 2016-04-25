#!/usr/bin/env node

var reporter = require('nodeunit').reporters.default;
reporter.run([
  'tests/sortingTests.js',
  'tests/heapTests.js'
]);