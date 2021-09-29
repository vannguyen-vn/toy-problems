/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// Create a convenience function that sorts arrays ascending numerically
Array.prototype.sortAscending = function() {
  this.sort(function(a, b) {
    return a - b;
  });
  return this;
};

var largestProductOfThree = function(array) {

  // Make a copy of the input array and sort it numerically
  array = array.slice().sortAscending();

  var n = array.length;
  var lastProduct = array[n-1] * array[n-2] * array[n-3];
  var firstProduct = array[n-1] * array[0] * array[1];

  return Math.max(firstProduct, lastProduct);
  };
