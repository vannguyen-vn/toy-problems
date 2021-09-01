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
  var noSlicing = (array, target, left, right) => {
    var pivot = Math.floor(left + (right - left) / 2);

    if (array[pivot] === target) {
      return pivot;
    }

    if (pivot >= right) { return null; }

    if (target < array[pivot]) {
      return noSlicing(array, target, left, pivot - 1);
    } else {
      return noSlicing(array, target, pivot + 1, right);
    }
  }

  return noSlicing(array, target, 0, array.length - 1);
};
