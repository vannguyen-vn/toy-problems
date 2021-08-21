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

  var pivot = [array[0]];
  var larger = [];
  var smaller = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] === pivot[0]) {
      pivot.push(array[i]);
    } else if (array[i] > pivot[0]) {
      larger.push(array[i])
    } else {
      smaller.push(array[i]);
    }
  }

  var resultL = [];
  var resultS = [];
  if (larger.length > 0) {
    resultL = quicksort(larger);
  }
  if (smaller.length > 0) {
    resultS = quicksort(smaller);
  }

  return resultS.concat(pivot).concat(resultL);
};
