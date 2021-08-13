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
  // Your code here.
  // create a counting object
  var counting = {};
  // create a first to return variable
  var firstToReturn;
  // iterate over the array
  for (var i = 0; i < arr.length; i++) {
    // create value, item iterated over array, and value, the count, if there is no prior key value pair in the counting object
    counting[arr[i]] === undefined ? counting[arr[i]] = 1 : counting[arr[i]]++;
    // increment value if key exists
  }
  // iterate over counting object
  for (var key in counting) {
    // first to return variable equals the first one to have an even count
    if (counting[key] === 2) {
      return firstToReturn = key;
    }
  }
  // return null if first to return variable equals to undefined
  if (firstToReturn === undefined) {
    firstToReturn = null;
  }
  return firstToReturn;
};
