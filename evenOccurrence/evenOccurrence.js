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

// PSEUDOCODE
// START FUNCTION
// Assume: arr is an array of positive integers, odd and even

// I'm going to keep an object literal of evens {}

// for each element in the array
// --> if not in the evens object, add it as a key with value 1
// --> if it IS there, add 1 to the value and % 2 === 0 to find if that value is even
// If it is even, return the key value

// Return a Number by casting the key
// END FUNCTION

// AFTER SOME TESTING, ABOVE PSEUDOCODE WORKS FOR A DIFFERENT PROMPT
// Below is the implementation for finding the FIRST NUMBER in the array that
// 1. Reached even occurrences and 2. Came first in the array order

var evenOccurrence = function(arr) {
  var occurs = {};
  var evens = [];
  var first = Number.POSITIVE_INFINITY;

  for (var i = 0; i < arr.length; i++) {
    if (!occurs.hasOwnProperty(arr[i])) {
      occurs[arr[i]] = [1, i];
      continue;
    }

    occurs[arr[i]][0]++;
    if (occurs[arr[i]][0] % 2 === 0) {
      evens.push([arr[i], occurs[arr[i]][1]]);
    }
  }

  for (var i = 0; i < evens.length; i++) {
    if (evens[i][1] < first) {
      first = evens[i][0];
    }
  }

  return first;
};
