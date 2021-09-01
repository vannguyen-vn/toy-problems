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
  if (array === null) {
    return null;
  }

  var low = 0;
  var high = array.length - 1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

