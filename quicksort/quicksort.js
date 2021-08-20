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
Pseudo code
find left index
find right index
find pivot using Math.floor

two arrays
largerArray
smallerArray
sorted

loop through array
  if i === pivot
    continue
  if array[i] < array[pivot]
    push to smaller array
  if array[i] > array[pivot]
    push to larger array

return sorted.concat(quicksort(smallerArray), array[pivot], quicksort(largerArray));

*/

var quicksort = function (array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}


