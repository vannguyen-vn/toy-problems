/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var sorted = array.sort((a, b) => a - b);
  var length = array.length;
  let productPos = sorted[length - 1] * sorted[length - 2] * sorted[length - 3];
  let productNeg = sorted[0] * sorted[1] * Math.max(...sorted);
  return Math.max(productNeg, productPos);
};

// console.log(largestProductOfThree([2, 1, 3, 7]))
