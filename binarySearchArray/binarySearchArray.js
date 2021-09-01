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
  var found = false;

  var search = (arr, target) => {
    if (arr.length === 0) {
      return;
    }

    if (arr.length === 1) {
      if (arr[0] === target) {
        found = true;
        return target;
      }
    }

    if (arr.length > 1) {
      var middleIndex = Math.floor(arr.length / 2);
      var left = arr.slice(0, middleIndex);
      var right = arr.slice(middleIndex);

      if (target < right[0]) {
        binarySearch(left, target);
      } else {
        binarySearch(right, target);
      }

      if (arr.indexOf(target) >= 0) {
        found = true;
        return target;
      }
    }
  }
  search(array, target);

  return found ? array.indexOf(target) : null;
};

