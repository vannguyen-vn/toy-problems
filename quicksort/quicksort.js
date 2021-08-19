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
  // declare var for pivot and send to random number in array
  var pivot = array[Math.floor(Math.random() * array.length)];
  // console.log(pivot);

  // declare smaller array
  var small = [];
  // declare larger array
  var large = [];

  // declare inner function
  var innerFunc = function (num) {
    // check if current is smaller then pivot
    if (num <= pivot) {
      // push to smaller
      small.push(num);
      // else
    } else {
      // push to bigger
      large.push(num);
    }
    return;
  }

  // iterate over array
  for (var i = 0; i < array.length; i++) {
    // recursive call inner function
    innerFunc(array[i]);
  }
  // call inner function
  innerFunc();

  // return result
  return small.concat(large);

};


// console.log(quicksort([4, 6, 8, 2, 1, 3]))
