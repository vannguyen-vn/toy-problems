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
  var small = [];
  var big = [];
  var mid = [];
  var randomIndex = Math.floor(Math.random() * (array.length - 0))
  var pivot = array[randomIndex];
  array.forEach(number => {
    if (number > pivot) {
      big.push(number);
    } else if (number < pivot) {
      small.push(number);
    } else {
      mid.push(number);
    }
  })
  if (big.length > 1) {
    quicksort(big);
  } else if (small.length > 1) {
    quicksort(small);
  }
  return small.concat(mid).concat(big);
};

console.log(quicksort([4, 1, 5, 7 , 3, 1, 3, 8]))