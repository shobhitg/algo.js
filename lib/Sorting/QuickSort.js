/**
 * # Quick Sort
 *
 * Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.
 * The steps are:
 *  1. Pick an element, called a pivot, from the array.
 *  2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
 *  3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.
 *
 */


/*!
 * Constructor
 */
var QuickSort = function() {
}

QuickSort.prototype.partition = function(data, p, r) {
  var x = data[r];
  var i = p-1;
  for (var j=p; j< r; j++) {
    if(data[j] <= x) {
      i++;
      if (i !== j) {
        data[i] = data[i] ^ data[j];
        data[j] = data[i] ^ data[j];
        data[i] = data[i] ^ data[j];
      }
    }
  }
  if ( (i+1) !== r) {
    data[i+1] = data[i+1] ^ data[r];
    data[r]   = data[i+1] ^ data[r];
    data[i+1] = data[i+1] ^ data[r];
  }
  return i+1;
}


QuickSort.prototype.quickSort = function(data, p, r) {
  if(p < r) {
    var q = this.partition(data, p, r);
    this.quickSort(data, p, q-1);
    this.quickSort(data, q+1, r);
  }
  return data;
}

QuickSort.prototype.sort = function(data) {
  return this.quickSort(data, 0, data.length-1);
}

module.exports = QuickSort;
