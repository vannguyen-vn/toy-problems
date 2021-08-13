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
  var nums = [];
  var occurrences = {};
  for (var i = 0; i < arr.length; i++) {
    if (nums.indexOf(arr[i]) === -1) {
      nums.push(arr[i]);
      occurrences[arr[i]] = 1;
    } else {
      occurrences[arr[i]] += 1;
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (occurrences[nums[i]] % 2 === 0) {
      return nums[i];
    }
  }
  return null;
};
