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
var recursion = (array) => {
  // create an isSorted, set to false
  var usedSort = false;
  // iterate over the array
  for(let i = 1; i < array.length; i++) {
    // if value at index 1 is less than index 0
    if (array[i] < array[i - 1]) {
      // swap the two values
      var swappings = array[i];
      array[i] = array[i - 1];
      array[i - 1] = swappings;
      // isSorted true
      usedSort = true;
    }
  }
  // if isSorted
  if (usedSort) { recursion(array) }
    // recursionLess(array)
  // return array
  return array;
}

var quicksort = (array) => {
  // create two arrays, less and more array
  var arrayCopy = array.slice();
  var less = [];
  var more = [];
  // create pivot value in the array, using Math.random and multiplying by array length splice out of array
  var pivotIndex = Math.floor(Math.random() * array.length);
  var pivotValue = arrayCopy.splice(pivotIndex, 1);
  // iterate over the array
  for(let i = 0; i < arrayCopy.length; i++) {
    // if index is less than pivot value push to less else push to more
    arrayCopy[i] < pivotValue[0] ? less.push(arrayCopy[i]) : more.push(arrayCopy[i]);
  }
  // use a less and more recursive function for both less and more
  recursion(less);
  recursion(more);
  var sorted = less.concat(pivotValue, more);

  // return sorted array
  return sorted;
};
