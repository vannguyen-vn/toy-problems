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
  var j = 0;
  var pivot = array[array.length - 1];

  if (array.length === 1) {
      return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
        var replace = array[j];
        array[j] = pivot;
        array[array.length - 1] = replace;
        if (j === 0) {
          return array.slice(0, 1).concat(quicksort(array.slice(j + 1)));
        } else {
          return quicksort(array.slice(0, j)).concat(quicksort(array.slice(j)));
        }
      }

    if (array[i] <= pivot) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      j++;
    }
  }
};

