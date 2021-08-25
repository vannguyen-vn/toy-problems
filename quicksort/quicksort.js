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


var partition = function(array, low, high) {
  var pivot = array[high];
  var i = low - 1;

  for (var j = low; j < high; j++) {
    if (array[j] < pivot) {
      i += 1;
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  var temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;
  return i + 1;
};

var quicksort = function(array, low, high) {
  low = (low !== undefined) ? low : 0;
  high = (high !== undefined) ? high : array.length - 1;

  if (low < high) {

    pi = partition(array, low, high);

    quicksort(array, low, pi - 1);
    quicksort(array, pi + 1, high);
  }
  return array;
};
