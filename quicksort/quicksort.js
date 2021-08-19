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


var quicksort = function(array, low, high) {
  if (low >= high) {
    return;
  }
  var k = array[low];
  var i = low;
  var j = high;
  while (i !== j) {
    while (i < j && arr[j] >= k) {
      j--;
    }

    swap(arr, i, j);

    while (i < j && arr[i] <= k) {
        i++;
    }

    swap(arr, i, j);
  }/** for now , arr[i] = k. */

  quicksort(arr, low, i -1);
  quicksort(arr, i + 1, high);
}

var swap = function(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}