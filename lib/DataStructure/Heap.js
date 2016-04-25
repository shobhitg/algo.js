'use strict';
/**
 * The Heap data structure
 */

var arrayUtil = require('./../util/ArrayUtil');

class Heap {
  parent(i) {
    return Math.floor((i+1)/2)-1;
  }

  left(i) {
    return (2*i)+1;
  }

  right(i) {
    return (2*i)+2;
  }

  maxHeapify(A, i) {
    var l = this.left(i);
    var r = this.right(i);
    var largest;
    if (l < A.heapSize && A[l] > A[i]) {
      largest = l;
    } else {
      largest = i;
    }
    if (r < A.heapSize && A[r] > A[largest]) {
      largest = r;
    }
    if (largest !== i) {
      arrayUtil.swap(A, i, largest);
      this.maxHeapify(A, largest);
    }
  }

  buildMaxHeap(A) {
    A.heapSize = A.length;
    var i = Math.floor((A.length-1)/2);
    while (i >= 0) {
      this.maxHeapify(A, i);
      i--;
    }
    // console.wait();
    return A;
  }
}

module.exports = new Heap();
