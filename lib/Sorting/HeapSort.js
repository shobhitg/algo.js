'use strict';
/**
 * The heapsort algorithm involves preparing the list by first turning it into a max heap.
 * The algorithm then repeatedly swaps the first value of the list with the last value, decreasing the range of values considered in the heap operation by one, and sifting the new first value into its position in the heap.
 * This repeats until the range of considered values is one value in length.
 */

var heap = require('./../DataStructure/Heap');
var arrayUtil = require('./../util/ArrayUtil');

class HeapSort {
  sort(data) {
    data = heap.buildMaxHeap(data);

    for (var i = data.length-1; i > 0; i--) {
      arrayUtil.swap(data, 0, i); 
      data.heapSize--;
      heap.maxHeapify(data, 0);
    }
    return data.slice();
  }
}

module.exports = new HeapSort();