

<!-- Start lib/Sorting/BubbleSort.js -->

# Bubble Sort

Bubble sort has worst-case and average complexity both О(n²), where n is the number of items being sorted.
Even other О(n²) sorting algorithms, such as insertion sort, tend to have better performance than bubble sort.

#### Pseudocode from wikipedia
       procedure bubbleSort( A : list of sortable items )
          n = length(A)
          repeat
             swapped = false
             for i = 1 to n-1 inclusive do
                if A[i-1] > A[i] then
                   swap(A[i-1], A[i])
                   swapped = true
                end if
             end for
             n = n - 1
          until not swapped
      end procedure

<!-- End lib/Sorting/BubbleSort.js -->

<!-- Start lib/Sorting/InsertionSort.js -->

# Insertion Sort
Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. Each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.

Pseudocode from Cormen & Rivest:

  for i = 2 to length(A)
    x = A[i]
    j = i - 1
    while j > 0 and A[j] > x
        A[j+1] = A[j]
        j = j - 1
    end while
    A[j+1] = x[3]
  end for

<!-- End lib/Sorting/InsertionSort.js -->

<!-- Start lib/Sorting/QuickSort.js -->

# Quick Sort

Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.
The steps are:
 1. Pick an element, called a pivot, from the array.
 2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
 3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

<!-- End lib/Sorting/QuickSort.js -->

<!-- Start lib/Sorting/MergeSort.js -->

# Mergesort

Mergesort is a divide and conquer algorithm

Conceptually, a merge sort works as follows:
 1. Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
 2. Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

The worst case in MergeSort is O(*n* log *n*).

<!-- End lib/Sorting/MergeSort.js -->

<!-- Start lib/Sorting/StandardSort.js -->

# Standard Sort

This is a the default Array.sort() in Nodejs

## sort(data)

Standard Array.sort() function with a substaction based comparator.

### Params:

* **Array** *data* Array to be sorted

### Return:

* **Array** Sorted array

<!-- End lib/Sorting/StandardSort.js -->

