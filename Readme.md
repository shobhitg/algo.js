

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

