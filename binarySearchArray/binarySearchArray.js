/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  // find mid value
  var pivot = Math.floor(array.length / 2);
  if (array[pivot] === target) {
    return target;
  }

  if (array.length === 1) { return null; }

  if (array[pivot] > target) {
    return binarySearch(array.slice(0, pivot), target);
  } else {
    return binarySearch(array.slice(pivot, array.length), target);
  }
};
