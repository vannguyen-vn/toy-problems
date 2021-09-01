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
  if (target > array[array.length - 1] || (target < array[0])) { return null; }

  var sub = function (lowIndex, highIndex) {
    if (lowIndex === highIndex) { return null; }
    if (array.length === 1 && target !== array[0]) {
      return null;
    }
    var mid = Math.floor((highIndex - lowIndex) / 2) + lowIndex;
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      return sub(lowIndex, mid);
    } else if (target > array[mid] && target < array[mid + 1]) {
      return null;
    } else if (target > array[mid]) {
      return sub(mid, highIndex);
    }
  }

  return sub(0, array.length);
}