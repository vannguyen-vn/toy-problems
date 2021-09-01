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
  // create result === null
  var result = null;
  // create a recursive function
  var binary = (array) => {
    // find midpoint of current array
    const midpoint = Math.floor(array.length / 2);
    // split array at midpoint, designation left and right, lower and higher respectively
    const left = array.slice(0, midpoint);
    const right = array.slice(midpoint, array.length);
    if (target > array[midpoint]) {
      if (left.length === 0 || right.length === 0) {
        return;
      }
      binary(right);
    } else if (target < array[midpoint]) {
      // run recursion using the left array
      if (left.length === 0 || right.length === 0) {
        return;
      }
      binary(left);
    } else if (target === array[midpoint]) {
      result = array[midpoint];
      return;
    }
  }
  binary(array);
  return result === null ? result : array.indexOf(result);
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3

var index = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index); // null