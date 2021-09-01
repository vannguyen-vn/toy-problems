/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 2);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  var start = 0;
  var end = array.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (target === array[mid]) {
      return mid;
    } else if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    }
  }
  return null;
};

