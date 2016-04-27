'use strict';
/**
 *
 * This is a the default Array.sort() in Nodejs
 *
 */

class StandardSort {
/**
 * Standard Array.sort() function with a substaction based comparator.
 *
 * @param {Array}  data Array to be sorted
 * @return {Array} Sorted array
 * @api public
 */
  static sort(data) {
    return data.sort(function(a, b) {
      return a - b;
    });
  }
}

/*!
- * Default singleton instance
- */
module.exports = StandardSort;
