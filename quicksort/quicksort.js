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
  //base case
  //  when array length is 1
  //    return that one?
  //

  if(array.length <= 1) {
    return array;
  }

  //pick random index
  // var randomIndex = Math.floor(Math.random * array.length);
  var pivot = array[0];
  var lesserValues = [];
  var greaterValues = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      lesserValues.push(array[i]);
    } else {
      greaterValues.push(array[i]);
    }
  }

  var sortedLesserValues = quicksort(lesserValues);
  var sortedGreaterValues = quicksort(greaterValues);
  sortedLesserValues.push(pivot);
  return sortedLesserValues.concat(sortedGreaterValues);
  //create two result arrays (also save pivot)
  //  sort into the two based on pivot
  //  perform quicksort recursively on each slice
  //  combine lowerSlice, pivot, upperSlice together into one result


  //
};

var test1 = [4, 5, 2, 7, 1, 9, 0, 11];
var test2 = [1, 2, 3];
var test3 = [1, 1, 1, 1];
var test4 = [8, 7, 2, 4, 8, 0, 12, 17, 200];
console.log(quicksort(test1), 'should equal', [0, 1, 2, 4, 5, 7, 9, 11]);
console.log(quicksort(test2));
console.log(quicksort(test3));
console.log(quicksort(test4));