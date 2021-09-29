/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  array.sort((a, b) => {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });

  const negativeProduct = array[0] * array[1] * array[array.length - 1];
  const positiveProduct = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];

  console.log(array);
  return Math.max(negativeProduct, positiveProduct);
};

// module.exports = { largestProductOfThree };

