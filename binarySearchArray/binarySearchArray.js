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
  var low = 0;
  var high = array.length - 1;
  var mid = Math.floor(array.length / 2);
  while (high >= low) {
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      high = mid - 1;
      mid = Math.floor((high - low) / 2);
    } else {
      low = mid + 1;
      mid = low + Math.floor((high - low) / 2);
    }
  }
  return null;
};

