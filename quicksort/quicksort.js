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

var quicksort = function(array) {
  while (array.length > 0) {
    partition(array);
    array.splice(0, 1);
  }
};

var partition = function(toSort) {
  //helper function sort the array
  var smaller = [];
  var larger = [];
  for (var i = 1 ;i < toSort.length; i++) {
    if (toSort[i] < toSort[0]) {
      smaller.push(toSort[i])
    } else {
      larger.push(toSort[i]);
    }
  }
  // if smaller and larger are both single array, stop the recursion
  // else , smaller array + pivot + larger array
  smaller = smaller.push(toSort[0]);
  return smaller.concat(larger);
};

