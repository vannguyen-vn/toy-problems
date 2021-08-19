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
  let pivot = array[array.length - 1];
  let smallArray = [];
  let bigArray = [];

  if (array.length === 0) return [];
  if (array.length === 1) return array;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) smallArray.push(array[i]);
    else bigArray.push(array[i]);
  }

  return [quicksort(smallArray), pivot, quicksort(bigArray)].flat();
};