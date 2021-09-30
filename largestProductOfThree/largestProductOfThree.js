/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var input = array;
  if (input.length < 3) {
    return 0;
  } else if (input.length === 3) {
    return input[0] * input[1] * input[2];
  }
  input.sort(function (a, b) {
    return b - a;
  });
  var productOfLastTwo = input[input.length - 1] * input[input.length - 2];
  var productOfSecondThird = input[1] * input[2];
  if (input[0] <= 0) {
    return input[0] * input[1] * input[2];
  } else if (input[0] > 0 && productOfLastTwo > productOfSecondThird) {
    return input[0] * productOfLastTwo;
  } else {
    return input[0] * productOfSecondThird;
  }
};
