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


var quicksort = function (array) {
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return array;
  }
  let pivotVal = array[0]
  let lessArr = [];
  let moreArr = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivotVal) {
      lessArr.push(array[i])
    } else {
      moreArr.push(array[i])
    }
  }
  return [quicksort(lessArr), pivotVal, quicksort(moreArr)].flat();

};

console.log(quicksort([4, 9, 8, 2, 1, 6, 7, 8, 10]))
