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
  var lessArr = [];
  var greaterArr = [];
  var pivotIdx = (Math.floor(Math.random() * array.length))
  //  for ()
  var pivotVal;
  var quicksortMini = function (array) {
    for (let i = 0; i < array.length; i++) {
      pivotVal = array[pivotIdx]
      if (array[i] > pivotVal) {
        greaterArr.push(array[i]);
      } if (array[i] < pivotVal) {
        lessArr.push(array[i]);
      } if (array[i] === pivotVal) {
        greaterArr.unshift(array[i])
      }
    }
  }
  quicksort(lessArr)
  quicksort(greaterArr)
  console.log('pivotVal', pivotVal)
  console.log('lessArr', lessArr)
  console.log('greaterArr', greaterArr)

};

quicksort([4, 9, 8, 2, 1, 6, 7, 8, 10])
