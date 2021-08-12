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

var evenOccurrence = function(arr) {
  // Your code here.

  // create variable for result
  var result = null;
  // iterate through array
  for (var i = 0; i < arr.length; i++) {
    // iterate through array, ahead of first increment
    for (var j = 1; j < arr.length - 1; j++) {
      // declare current number
      var current = arr[i];
      var next = arr[j];
      // check if second increment matches current number
      if (current === next);
      // add current number to result
      result += current;
    }
  }
  // return null
  return result;
};
