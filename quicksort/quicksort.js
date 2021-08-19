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

  // Split the arrays
  // [6, 5, 4, 3, 2]
  // 4 is the pivot
  // [6, 5] 4 [3, 2]
  // [6, 5, 3, 2]
  // [5, 3, 2] -> [6]
  // [3, 2] -> [6, 5]
  // [3] <- [2] - [6, 5]
  // [3, 2] <- [] - [6, 5]

  var pivot = Math.floor(array.length / 2);

  if (pivot === 0) { return array; }

  var first = [];
  var second = [];
  var sorted = [];

  for (var i = 0; i < array.length; i++) {
    if (i === pivot) { continue; }

    if (array[i] < array[pivot]) {
      first.push(array[i]);
    } else {
      second.push(array[i]);
    }
  }

  return sorted.concat(quicksort(first), array[pivot], quicksort(second));
};
