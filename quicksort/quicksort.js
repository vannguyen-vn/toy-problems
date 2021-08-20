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
  // Set pivot as the first number of the array
  // for each element in the array
  // if smaller than pivot, go to left
  // if larger than pivot, go to right
  var pivot = array[0];
  var left = [];
  var right = [];

  if (array.length <= 1) {
    return array;
  }

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quicksort(left).concat(pivot, quicksort(right));
};
