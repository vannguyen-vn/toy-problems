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
    var smallerHalf = binarySearch(array.slice(0, midpoint), target);
    if (smallerHalf !== null) {
      return smallerHalf;
    } else {
      return null
    }
  } else if (target > pivot) {
    var largerHalf = binarySearch(array.slice(midpoint + 1), target);
    if (largerHalf !== null) {
      return midpoint + 1 + largerHalf;
    } else {
      return null;
    }
  } else {
    return null;
  }
};


//// testing ////
var index = binarySearch([1, 2, 3, 4, 5, 7, 9, 11, 14, 16], 9);
console.log(index); // 6
var index = binarySearch([11, 22, 33, 45, 53, 62], 55);
console.log(index); // null
