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
  if (target > array[array.length -1]) return null;
  var middleIndex = Math.floor(array.length / 2);
  var middle = array[middleIndex];
  var result = middleIndex;
  if (target === middle) {
    return result;
  } else if (target > middle) {
    result++;
    const nextSearch = binarySearch(array.slice(middleIndex + 1), target);
    if (nextSearch === null) {
      return null;
    } else {
      return result + nextSearch;
    }
  } else if (array.length === 1) {
    return null;
  } else {
    return binarySearch(array.slice(0, middleIndex), target);
  }
  return result
};
