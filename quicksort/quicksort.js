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
  if (array.length === 0) {
    return [];
  }

  var split = [[], []];
  var lessThanPivot = split[0];
  var greaterThanPivot = split[1];
  var pivot;

  if (array.length % 2 === 1) {
    pivot = array[(array.length - 1) / 2];
  } else {
    pivot = array[array.length / 2];
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === pivot && array.length > 1) {
      continue;
    } else if (array[i] === pivot) {
      return array;
    } else if (array[i] < pivot) {
      lessThanPivot.push(array[i]);
    } else {
      greaterThanPivot.push(array[i]);
    }
  }

  if ((lessThanPivot.length === 1 || lessThanPivot.length === 0) && (greaterThanPivot.length === 1 || greaterThanPivot.length === 0)) {
    return lessThanPivot.concat(pivot, greaterThanPivot);
  }

  var sorted = [];

  for (var i = 0; i < split.length; i++) {
    if (i === 1) {
      sorted.push(pivot);
    }
    sorted = sorted.concat(quicksort(split[i]));
  }

  return sorted;
};