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

  var helper = (array, target, index) => {
    var mid = Math.floor(array.length / 2);
    if (array.length === 1 && target !== array[mid]) {
      return null;
    }

    if (target === array[mid]) {
      index += mid;
      return index;
    } else if (target < array[mid]) {
      return helper(array.slice(0, mid), target, index);
    } else if (target > array[mid]) {
        index += mid;
        if (mid + 1 >= array.length) {
          return null;
        }
      return helper(array.slice(mid + 1), target, index + 1);
    }
  }

  return helper(array, target, 0);
};

