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
  var start = 0;
  var end = array.length - 1;

  while (start <= end) {
    var midpoint = Math.floor((start + end) / 2);

    if (array[midpoint] === target) {
      return midpoint;

    } if (array[midpoint] > target) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
  }

 return null;

};

