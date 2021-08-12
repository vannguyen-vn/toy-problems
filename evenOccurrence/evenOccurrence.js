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
  var evenOccurrence = function(arr) {
    // Create a counter obj
    var counterObj = {};
    // Iterate over array
    for (var i = 0; i < arr.length; i++) {
      // If value is not in obj
      if (counterObj[arr[i]] === undefined) {
        // Add into obj with a value of one
        counterObj[arr[i]] = 1;
        // Else
      } else {
        // Add to current count
        counterObj[arr[i]]+= 1;
      }
    }
    // Loop through obj
    for (key in counterObj) {
      // If obj[key] & 2 == 0
      if (counterObj[key] % 2 === 0) {
      // Return key
      return key;
      }
    }
  };
};
