/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

Array.prototype.ascendingOrder = function() {
  this.sort(function(a, b) {
    return a - b;
  });
  return this;
};

var largestProductOfThree = function(array) {
  array = array.slice().ascendingOrder();
  let n = array.length;
  let last = array[n - 1] * array[n - 2] * array[n - 3];
  let first = array[n - 1] * array[0] * array[1];
  return Math.max(first, last);
};

// console.log(largestProductOfThree([2, 1, 3, 7]));