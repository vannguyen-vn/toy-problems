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
  if (array.length === 1) return array;
  if (array.length === 2) {
    if (array[0] > array[1]) {
      var first = array[0];
      array[0] = array[1];
      array[1] = first;
    }
    return array;
  }
  if (array.length === 3) {

  }
  var pivot = array[Math.floor(array.length/2)];
  var arr1 = [];
  var arr2 = [];
  for (var i = 0; i < array.length; i++) {
    array[i] <= pivot ? arr1.push(array[i]) :
    arr2.push(array[i])
  }

  return quicksort(arr1).concat(quicksort(arr2));

};
