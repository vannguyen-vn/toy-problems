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
  var isSorted = true;
  var pivot = array[array.length - 1];
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      if (isSorted) {
        return array;
      } else {
        var replace = array[j];
        array[j] = pivot;
        array[array.length - 1] = replace;
        return quicksort(array.slice(0, j)).concat(quicksort(array.slice(j)));
      }
    } else if (array[i] <= pivot) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      j++;
      isSorted = false;
    }
  }
};


