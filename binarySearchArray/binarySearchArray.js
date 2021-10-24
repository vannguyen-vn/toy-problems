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
  var middleIndex = Math.floor(array.length / 2);
  var middle = array[middleIndex];
  var result = middleIndex;
  if (target > array[array.length -1]) {return null;}
  if (target === middle) {
    return result;
  } else if (target > middle) {
    result++;
    return result + binarySearch(array.slice(middleIndex + 1), target);
  } else {
    result--;
    return binarySearch(array.slice(0, middleIndex), target);
  }
  return result
};
