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
  //Create a max value
  var max = array.length - 1;
  // Create a min value
  var min = 0
  // While the min is less than the max
  while(min <= max) {
    // Create a middle variable
    var middle = Math.floor((min + max) / 2);
    // If the array at middle is equal to target
    if (array[middle] === target) {
      // Return middle
      return middle;
      // else if the array at middle is less than target
    } else if (array[middle] < target) {
      // Set min to middle plus one
      min = middle + 1;
      // Else set max to middle minus one
    } else {
      max = middle - 1;
    }
  }
  return null;
};

