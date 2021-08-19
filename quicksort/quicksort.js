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
  var newArray = [...array];

  // Base Case
  if (array.length < 2) {
    return newArray;
  }
  // Get Pivot
  var pivot = newArray[0]; //Math.floor(Math.random() * newArray.length);
  var small = [];
  var big = [];

  //Iterate through array
  for(var i = 1; i < array.length; i++) {
    // if smaller, put in smaller array
    if(array[i] < pivot) {
      small.push(array[i]);
    }
    // if bigger, put in big array
    else {
      big.push(array[i]);
    }
  }
  //return array containg all sorted arrays
  return [...quicksort(small), pivot, ...quicksort(big)];
};

var myArray = [1, 5, 8, 5, 3, 6];
var sortedArray = quicksort(myArray);
console.log('Array: ', myArray);
console.log('Sorted array: ', sortedArray);