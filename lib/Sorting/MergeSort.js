/**
 * # Mergesort is a divide and conquer algorithm
 *
 * Conceptually, a merge sort works as follows:
 *  1. Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
 *  2. Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.
 *
 * The worst case in MergeSort is O(*n* log *n*).
 */


/*!
 * Constructor
 */
var MergeSort = function() {
}

MergeSort.prototype.merge = function(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

MergeSort.prototype.mergeSort = function(data) {
    // Terminal case: 0 or 1 item arrays don't need sorting
    if (data.length < 2) {
        return data;
    }

    var middle = Math.floor(data.length / 2),
        left    = data.slice(0, middle),
        right   = data.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));

}
MergeSort.prototype.sort = function(data) {
  return this.mergeSort(data);
}

module.exports = MergeSort;
