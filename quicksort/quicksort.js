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
  // Create a pivot variable
  var pivot = array[0];
  // Create a smaller array
  var smallerVals = [];
  // Create a larger array
  var largerVals = [];
  // Check if array is less than or equal to zero
  if (array.length <= 0) {
    // If so return array
    return array;
  }
  //Iterate over the array
  for (var i = 1; i < array.length; i++) {
    // If array at pivot is greater than value at i
    if (pivot >= array[i]) {
      //Push into smaller array
      smallerVals.push(array[i]);
      // Else if array at pivot is lesser than value at i
    } else {
      // Push into larger array
      largerVals.push(array[i]);
    }
  }
  // Combine smaller array, pivot, and larger array while passing into function
  return quicksort(smallerVals).concat(pivot, quicksort(largerVals));
};
