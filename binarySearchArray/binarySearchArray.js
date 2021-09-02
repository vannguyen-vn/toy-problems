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

var binarySearch = function (array, target, low = 0, high = array.length) {

  var midpoint = Math.floor((low + high) / 2);

  if (low <= high) {
    if (target < array[midpoint]) {
      return binarySearch(array, target, low, midpoint - 1);
    } else if (target > array[midpoint]) {
      return binarySearch(array, target, midpoint + 1, high);
    } else if (target === array[midpoint]) {
      return midpoint;
    }
  }
  return null;
};
