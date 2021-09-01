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
  let midPoint = Math.floor( (array.length - 1) / 2 );

  if (array[midPoint] < target) {
    for (let i = midPoint + 1; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return null;
  } else {
    for (let i = 0; i <= midPoint; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return null;
  }
};

