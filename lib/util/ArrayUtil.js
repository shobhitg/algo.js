'use strict';
/**
 * # Array utility functions
 * @ignore
 */

class ArrayUtil {
  swap(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  };
}

module.exports = new ArrayUtil();
