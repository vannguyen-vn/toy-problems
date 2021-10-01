/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  // TODO: everything
  let product;
  var sorted = array.map((num) => Math.abs(num))
    .sort((a, b) => a > b ? 1 : -1);

  if (sorted.length >= 3) {
    var last = sorted.length - 1;
    product = sorted[last] * sorted[last - 1] * sorted[last - 2];
  }
  return product;
};
