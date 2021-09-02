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

  var recursive = (min, max) => {
    var index = Math.floor( (max - min) / 2 + min);
    if (array[index] === target) {
      return index;
    } else if (min === max) {
      return null;
    }

    if (target > array[index]) {
      return recursive(index + 1, max);
    } else {
      return recursive(min, index);
    }
  }
  return recursive(0, array.length);
};
