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
  if (array.length < 2) {
    return array;
  }
  var pivotPoint = array[array.length - 1];
  var arraySmaller = [];
  var arrayBigger = [];
  // console.log(pivotPoint);

  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] < pivotPoint) {
      arraySmaller.push(array[i])
    } else {
      arrayBigger.push(array[i])
    }
  };
  // [2, 8, 10, 22, 5, 64, 33] && [100, 88, 69]
  // console.log(arraySmaller, arrayBigger);
  return [...quicksort(arraySmaller), pivotPoint, ...quicksort(arrayBigger)];
};

// console.log(quicksort([2,8,10,22,5,64,100,33,88,69]));