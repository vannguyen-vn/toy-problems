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

  var result = [];

  var innerFunction = (array) => {

    var pivot = array[Math.floor(array.length / 2)];

    array.splice(array.indexOf(pivot), 1);
    var lower = [];
    var higher = [];

    for (var i = 0; i < array.length; i++) {

      if (array[i] <= pivot) {
        lower.push(array[i]);
      }

      if (array[i] > pivot) {
        higher.push(array[i]);
      }
    }

    if (lower.length > 0) {
      innerFunction(lower);
    }

    result.push(pivot);

    if (higher.length > 0) {
      innerFunction(higher);
    }

    return result;
  };
  innerFunction(array);

  return result;
};