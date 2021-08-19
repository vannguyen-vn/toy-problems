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
  //constraints
  // if array.length is 0 or undefined return null;
  if (array.length === 0) {
    return [];
  }
  // if array length is 1 return array
  if (array.length === 1) {
    return array;
  }
  // declare pivot as 0 index
  let pivotVal = array[0]
  // declare variable as lessArr
  let lessArr = [];
  // declar variable as moreArr
  let moreArr = [];
  // iterate over array
  for (let i = 0; i < array.length; i++) {
    // if element is less than pivot val
    if (array[i] < pivotVal) {
      // push less
      lessArr.push(array[i])
      // otherwise
    } else {
      // push morearr
      moreArr.push(array[i])
    }
  }
  // recursively call and concat arrays
  return [quicksort(lessArr), pivotVal, quicksort(moreArr)].flat();

};

console.log(quicksort([4, 9, 8, 2, 1, 6, 7, 8, 10]))
