/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var len = array.length;
  array.sort((a, b) => {return a - b;});
  if (array[0] < 0 && array[1] < 0 && array[0] * array[1] * array[len - 1] > array[len - 1] * array[len - 2] * array[len - 3]) {
    return array[0] * array[1] * array[len - 1];
  }
  return array[len - 1] * array[len - 2] * array[len - 3];
};
