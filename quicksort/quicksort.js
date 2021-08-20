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
  var results = [];
  if (array.length === 0 || array.length === 1) {
    return array;
  } else {
    var pivot = array[0];
    var lesserHalf = [];
    var greaterHalf = [];
    for (var i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        lesserHalf.push(array[i]);
      } else if (array[i] === pivot) {
        greaterHalf.unshift(array[i]);
      } else {
        greaterHalf.push(array[i]);
      }
    }
    lesserHalf = quicksort(lesserHalf);
    greaterHalf = quicksort(greaterHalf);

    return [...lesserHalf, pivot, ...greaterHalf];
  }
};
