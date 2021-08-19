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
  if(array.length <= 1) {
    return array;
  }
    var leftArr = [];
    var rightArr = [];
  var pivotIndex = Math.ceil(array.length / 2);
  var pivot = array[pivotIndex];
  for (var i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] <= pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  return [...(quicksort(leftArr)), pivot, ...(quicksort(rightArr))];
};
