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

// input: array (sorted), number (target)
// output: number (index of target)
// constraints: use binary search
// edge cases: target not in array, return null, if target appears multiple times (1st one found?)
var binarySearch = function (array, target) {
  // find the midpoint
  // var midpoint = Math.floor(array.length / 2)
  var start = 0
  var end = array.length - 1
  // repeat while in bounds of array
  while (start <= end) {
   var midpoint = Math.floor((start + end)/ 2)
    // compare target to value at midpoint
    if (array[midpoint] === target) {
        return midpoint
      } else if (array[midpoint] > target) { // if target is greater than value, move to the right
        end = midpoint - 1
      } else if (array[midpoint] < target) {// if target is less than value, move to the left
        start = midpoint + 1
      }
  }
  return null
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3
var index = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index); // null