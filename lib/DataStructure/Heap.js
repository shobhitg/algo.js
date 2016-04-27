'use strict';
/**
 * The Heap data structure
 */

var arrayUtil = require('./../util/ArrayUtil');

class Heap {
  constructor(data) {
    this.data = data;
    this.heapSize = data.length;
  }
  static parent(i) {
    return Math.floor((i+1)/2)-1;
  }

  static left(i) {
    return (2*i)+1;
  }

  static right(i) {
    return (2*i)+2;
  }

  static maxHeapify(heap, i) {
    var l = this.left(i);
    var r = this.right(i);
    var largest;
    if (l < heap.heapSize && heap.data[l] > heap.data[i]) {
      largest = l;
    } else {
      largest = i;
    }
    if (r < heap.heapSize && heap.data[r] > heap.data[largest]) {
      largest = r;
    }
    if (largest !== i) {
      arrayUtil.swap(heap.data, i, largest);
      this.maxHeapify(heap, largest);
    }
  }

  static buildMaxHeap(heap) {
    var i = Math.floor((heap.data.length-1)/2);
    while (i >= 0) {
      this.maxHeapify(heap, i);
      i--;
    }
    return heap;
  }
}

module.exports = Heap;
