/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  array.sort();
  var n = array.length;

  // negative
  var one1 = array[0];
  var two1 = array[1];
  var three1 = array[n - 1]
  var negTotal = one1 * two1 * three1;

  // positive
  var one2 = array[n - 1];
  var two2 = array[n - 2];
  var three2 = array[n - 3];
  var posTotal = one2 * two2 * three2;

  return Math.max(negTotal, posTotal);
};
