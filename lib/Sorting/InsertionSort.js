'use strict';
/**
 * Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. Each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
 * Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.
 *
 * #### Pseudocode from Cormen & Rivest:
 *       for i = 2 to length(A)
 *         x = A[i]
 *         j = i - 1
 *         while j > 0 and A[j] > x
 *             A[j+1] = A[j]
 *             j = j - 1
 *         end while
 *         A[j+1] = x[3]
 *       end for
 */


class InsertionSort {
  static sort(data) {
    var i;
    for (var j=1; j < data.length; j++) {
      var key = data[j];
      i = j-1;
      while(i>=0 && data[i]>key) {
        data[i+1] = data[i];
        i--;
      }
      data[i+1] = key;
    }
    return data;
  }
}


module.exports = InsertionSort;
