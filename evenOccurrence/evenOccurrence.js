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

  var storage = {};

  // store a boolean in storage obj
  for (var i = 0; i < arr.length; i++) {
    //if not present it's value will be set to true, or false if present already
    storage[arr[i]] = !storage[arr[i]];
  }

  // loop over original arr once more to retreive the first in the arr that occurred even times
  for (i = 0; i < arr.length; i++) {
    // if items value if false in storage(meaning occured even times) return item
    if (!storage[arr[i]]) { return arr[i]}
  }

  // if no items occurred even times, return null
  return null;
};

//I had the right idea at first time around but I over complicated the process,
// and set it up to only deal with numbers not strings.

// ** Time Complexity is linear for this problem ** //
