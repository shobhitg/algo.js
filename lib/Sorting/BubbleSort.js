'use strict';
/**
 * Bubble sort has worst-case and average complexity both О(n²), where n is the number of items being sorted.
 * Even other О(n²) sorting algorithms, such as insertion sort, tend to have better performance than bubble sort.
 *
 * #### Pseudocode from wikipedia
 *        procedure bubbleSort( A : list of sortable items )
 *           n = length(A)
 *           repeat
 *              swapped = false
 *              for i = 1 to n-1 inclusive do
 *                 if A[i-1] > A[i] then
 *                    swap(A[i-1], A[i])
 *                    swapped = true
 *                 end if
 *              end for
 *              n = n - 1
 *           until not swapped
 *       end procedure
 *
 */

class BubbleSort {
  sort(data) {
    var n = data.length;
    var swapped;
    do {
      swapped = false;
      for (var i = 0; i <n-1; i++) {
        if (data[i] > data[i+1]) {
          data[i]   = data[i] ^ data[i+1];
          data[i+1] = data[i] ^ data[i+1];
          data[i]   = data[i] ^ data[i+1];
          swapped = true;
        }
      }
    } while(swapped);
    return data;
  }
}

module.exports = new BubbleSort();