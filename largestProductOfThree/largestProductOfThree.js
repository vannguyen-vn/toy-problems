/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  if (array.length <= 3) {
    return array.reduce((prev, next) => {
      return prev * next;
    })
  }

  array.sort((a, b) => { return b - a });

  return array[0] * array[1] * array[2];
};

console.log(largestProductOfThree([20, 4, 3, 7, 8]));