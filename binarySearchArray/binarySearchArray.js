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
  debugger;
  if (array.length === 1 && array[0] !== target) { return null; }
  var arrayMiddle = Math.floor((array.length - 1)/2);
  if (array[arrayMiddle] === target) {
    return arrayMiddle;
  } else if (array[arrayMiddle] > target) {
    return binarySearch(array.slice(0, arrayMiddle), target)
  } else {
    var rightSearch = binarySearch(array.slice(arrayMiddle + 1), target);
    if (rightSearch !== null) {
      return rightSearch + arrayMiddle + 1;
    } else {
      return null;
    }
  }
};
// module.exports = binarySearch;

