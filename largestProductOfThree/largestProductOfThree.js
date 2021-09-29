/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// input: array of numbers
// output: number

// iterate over the array
// sort the array
// take the 3 numbers at the end
// multiply them together

var largestProductOfThree = function(array) {
  array.sort()
  var threeNums = array.slice(array.length - 3)
  return threeNums.reduce(function(previousValue, currentValue) {
    return previousValue * currentValue
  }, 1);
};
