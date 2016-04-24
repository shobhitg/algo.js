/**
 * # Standard Sort
 *
 * This is a the default Array.sort() in Nodejs
 *
 */


/*!
 * Constructor
 */
var StandardSort = function() {
}

/**
 * Standard Array.sort() function with a substaction based comparator.
 *
 * @param {Array}  data Array to be sorted
 * @return {Array} Sorted array
 * @api public
 */
StandardSort.prototype.sort = function(data) {
  return data.sort(function(a, b) {
    return a - b;
  });
}

module.exports = StandardSort;
