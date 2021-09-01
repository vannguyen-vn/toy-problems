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
  var index = Math.floor(array.length / 2);
  var binary = (array) => {
    var midpoint = Math.floor(array.length / 2);
    if (array.length === 1 && array[0] !== target) {
      return null;
    }
    if (target > array[midpoint]) {
      index++;
      return binary(array.slice(midpoint), index);
    } else if (target < array[midpoint]) {
      index--;
      return binary(array.slice(0, midpoint), index);
    } else if (target === array[midpoint]) {
      return index;
    }
  }
  return binary(array, index);
};

// var index = binarySearch([1, 2, 3, 4, 5], 5);
// console.log(index); // 3

// var index = binarySearch([1, 2, 3, 4, 5], 8);
// console.log(index); // null