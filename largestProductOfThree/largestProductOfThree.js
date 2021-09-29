/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var storage = {};

  for (var i = 0; i < array.length; i++) {
    storage[array[i]] = array[i];
  }

  var arr = Object.keys(storage)

  return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
};
