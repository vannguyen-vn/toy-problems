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
  var occurance = {};
  // store the numbers in our occurance to see their occure times
  for (var i = 0; i < arr.length; i++) {
    if (occurance[arr[i]] === undefined) {
      occurance[arr[i]] = 1;
    } else {
      occurance[arr[i]]++;
    }
  }
  //search through the occurance storage to find the first even number
  for (var key in occurance) {
    if (occurance[key] % 2 === 0) {
      return key;
    }
  }
};
