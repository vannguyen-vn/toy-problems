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
  var i = Math.floor(array.length / 2);
  var val = array[i];

  if (target === val) {
    return i;
  }
  if (target < val) {
    var low = array.slice(0, i);
	binarySearch(low, target);
  } else {
    var high = array.slice(i, array.length);
	binarySearch(high, target);
  }

  return i;

};



var index = binarySearch([1, 2, 3, 4, 5], 5);


console.log(index);