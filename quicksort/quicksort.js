/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  // Set pivot as the last number of the array
  // scan from left to right until an element bigger than pivot
  // scan from right to left until an element smaller than pivot
  var swap = (array, a, b) => {
    [list[a], list[b]] = [list[b], list[a]];
  }
  // recursively scan the left half
  // recursively scan the right half
  var partition = (array, start, end) => {
    const pivot = array[end];
    let leftIndex = start;

    // for (var i = start; i < array.length; i++) {
    //   if (array[i] < )
    // }
  }
};
