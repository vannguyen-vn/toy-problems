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
    // How to add the result with the spliced item??
    return array;
  }
};

var partition = function(array2) {
  //helper function sort the array
  var smaller = [];
  var larger = [];
  for (var i = 1; i < array2.length; i++) {
    if (array2[i] < array2[0]) {
      smaller.push(array2[i]);
    } else {
      larger.push(array2[i]);
    }
  }
  // if smaller and larger are both single array, stop the recursion
  // else , smaller array + pivot + larger array
  //var middle = smaller.push(array2[0]);
  larger.unshift(array2[0]);
  var result = smaller.concat(larger);
  return result;
};
