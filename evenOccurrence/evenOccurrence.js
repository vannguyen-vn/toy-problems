/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function (arr) {
  // input array
  // output first element that appears an even number of times in an array
  // declare counters
  if (arr.length === 0) {
    return null;
  }
  var counterObj = {};
  // iterate over array
  for (var i = 0; i < arr.length; i++) {
    if (counterObj[arr[i]] === undefined) {
      counterObj[arr[i]] = 1;
    } else {
      counterObj[arr[i]]++;
    }
    console.log(counterObj, i)
  }
  for (var key in counterObj) {
    if (counterObj[key] >= 2) {
      return key
    }
  }
  return null
  // add to obj with count
  // return the first item that is even
};
