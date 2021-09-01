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
  var midpoint = Math.floor(array.length / 2);
  var pivot = array[midpoint];

  if (target < array[0] || target > array[array.length - 1] ) {
    return null;
  } else if (target === pivot) {
    return midpoint;
  } else if (target < pivot) {
    return binarySearch(array.slice(0, midpoint), target);
  } else {
    return midpoint + 1 + binarySearch(array.slice(midpoint + 1), target);
  }
};


//// testing ////
// var index = binarySearch([1, 2, 3, 4, 5, 7, 9, 11, 14, 16], 9);
// console.log(index); // 3
// var index = binarySearch([1, 2, 3, 4, 5], 8);
// console.log(index); // null
