/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  array = array.sort((a, b) => {
    return a - b
  })

  var highest = array[array.length - 1];
  var secondHighest = array[array.length - 2];
  var thirdHighest = array[array.length - 3];

  var negative = array[0];
  var secondNegative = array[1];

  return Math.max(highest * secondHighest * thirdHighest, highest * negative * secondNegative);
};
