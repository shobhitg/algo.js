// module.exports=require('./lib');
module.exports = {
  // BubbleSortsdsds: require('./sorting/index'),
  BubbleSort: require('./lib/Sorting/BubbleSort'),
  MergeSort: require('./lib/Sorting/MergeSort'),
  StandardSort: require('./lib/Sorting/StandardSort'),
  QuickSort: require('./lib/Sorting/QuickSort'),
  InsertionSort: require('./lib/Sorting/InsertionSort'),
  HeapSort: require('./lib/Sorting/HeapSort'),
  Heap: require('./lib/DataStructure/Heap.js'),
  BSTNode: require('./lib/DataStructure/BST.js').BSTNode,
  BST: require('./lib/DataStructure/BST.js').BST,
  ArrayUtil: require('./lib/util/ArrayUtil.js')
}
