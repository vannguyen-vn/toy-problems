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

  //have pointer at start, middle and end
  //if middle = target, return middle
  //if target is bigger than midpt, set start pointer to midpoint, find new midpoint
  //if target is smaller than midpoint, set end pointer to midpoint, find new midpoint
  var startIndex = 0;
  var lastIndex = array.length - 1;
  var midpoint = Math.floor((startIndex+lastIndex)/2);
  for (var i = 0; i < array.length; i++) {
    console.log(startIndex, lastIndex, midpoint, 'val:', array[midpoint]);
    if (startIndex > lastIndex) {
      return null;
    }
    if (array[midpoint] === target) {
      return midpoint;
    }
    if (target > array[midpoint]) {
      startIndex = midpoint;
      midpoint = Math.floor((startIndex+lastIndex)/2);
    }
    if (target < array[midpoint]) {
      lastIndex = midpoint;
      midpoint = Math.floor((startIndex+lastIndex)/2);
    }
  }
  return null;

};


// var array = [1, 4, 6 , 7, 9, 24, 24, 37, 60];
// console.log(binarySearch(array, 8));
