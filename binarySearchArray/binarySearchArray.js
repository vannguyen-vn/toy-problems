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
  var min = 0;
  var max = array.length - 1;
  var index;

  while (min <= max) {
    index = Math.floor((max + min) / 2);

    if (target === array[index]) {
      return index;
    }

    if (target > array[index]) {
      min = index + 1;
    } else {
      max = index - 1;
    }
  }
  return null;
};



var index = binarySearch([1, 2, 3, 4, 5], 5);


console.log(index);