/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

/*
Input: array
Output: sorted array

Pseudocode:
- Base case: length of array < 2 => return array
- Pick the Pivot is the first element of array
- Create a leftArr and rightArr
- Go though the array
  - if element  > pivot => push to righttArr
  - if element  < pivot => push to leftArr
- Recursion until the array is sorted
*/
var quicksort = function(array) {
  if ( array.length < 2) {
    return array;
  }
  var pivot = array[0];
  var leftArr = [];
  var rightArr = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      rightArr.push(array[i]);
    } else {
      leftArr.push(array[i]);
    }
  }
  return quicksort(leftArr).concat(pivot, quicksort(rightArr));
};
var array = [5,3,7,6,2,9];
array = quicksort(array, 0, array.length - 1);
console.log(array);


//O(n log n), and worst case: O(n²)