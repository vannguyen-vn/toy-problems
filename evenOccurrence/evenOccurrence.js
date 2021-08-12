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
  // iterate through the array and assign each value as the key of an object
  var occurred = {};
  arr.forEach(function(item) {
    if (occurred[item] === undefined) {
      occurred[item] = 1;
    } else {
      occurred[item]++;
    }
  });

  for (var num in occurred) {
    if (occurred[num] % 2 === 0) {
      return num;
    }
  }
};
