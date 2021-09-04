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
  // iterate through array
  for (var i = 0; i < arr.length; i++) {
    var result;
    // declare variable for occurence
    var occurence = 1;
    // iterate through array again ahead of first increment
    for (var j = i + 1; j < arr.length - 1; j++) {
      // declare variables
      var current = arr[i];
      var testNum = arr[j];
      // if current equals num
      if (current = testNum) {
        // occurrence plus 1
        occurence++;
        // add to result
        result = current;
      }
    }
    // if occurence is even
    if (occurence % 2 === 0) {
      // return value
      return result;
    }
  }
  return null;
};
