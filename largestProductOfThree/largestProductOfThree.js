/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// input array of numbers
// output number (largest product of three numbers from input array)
// constraint: N/A
// edge cases: empty array, less than 3?
var largestProductOfThree = function(array) {
   array.sort()
   return array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
};

largestProductOfThree([2, 1, 3, 7]) === 42
largestProductOfThree([-2, -1, -3, -7]) === - 42