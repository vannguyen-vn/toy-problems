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
  //takes in an array and a value; returns the index of the value using binary search
  // find the middle value
    // if the target is equal to the middle value
      // return the middle value
    // if the target is less than the middle value
      // search the lower end (recursive)
    // if the target is greater than the middle value
      // search the higher end (recursive)

  var middleIndex = Math.floor(array.length/2);
  var middleValue = array[middleIndex];

  if (array.length === 1 && array[0] !== target) {
    return null;
  }
  if (middleValue === target) {
    return middleIndex;
  }
  if (middleValue > target) {
    // return binarySearch(lower end)
  }
  if (middleValue < target) {
    // return binarySearch(higher end)
  }
};

