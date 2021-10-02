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
  if (array.length <= 1) {
    return array;
  }
  var pivotNum = Math.floor(Math.random() * array.length);
  var pivot = array[pivotNum];
  var lesser = [];
  var greater = [];
  for (var i = 0; i < array.length; i++) {
    if (i === pivotNum) {
      continue;
    } else {
      if (array[i] <= pivot) {
        lesser.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
  }
  // console.log(lesser)
  // console.log(greater)
  return [].concat(quicksort(lesser), pivot, quicksort(greater));
};

// console.log(quicksort([5,1,4,2,3]));
// console.log(quicksort([]));