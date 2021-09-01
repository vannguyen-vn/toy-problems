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
  // get the middle index of the array which is the length cut in half rounded down
  // if the number at that middle index is the target number
  // if the length of the array is 1 && the current number is not the target, return null
  // return the index
    // if it is not, check to see if the value at that index is greater or lesser than the target number
    // if the value is greater than the number, slice the array from the current index + 1 to the end
    // if the value is less than the number, slice the array from the beginning to the current index
  // take the new array and insert it into the function using recursion
  var binarySearch = function (array, target, start, end) {
    start = start || 0
    end = end || array.length - 1
    if (start > end) return null;
    var mid=Math.floor((start + end)/2);
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] > target) {
      return binarySearch(array, target, start, mid-1);
    } else {
      return binarySearch(array, target, mid+1, end);
    }
  }
