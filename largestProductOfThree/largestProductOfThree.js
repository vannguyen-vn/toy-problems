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
   array.sort(function(a, b) {
    return a - b;
  })
   var positives = array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
   var negatives = array[0] * array[1] * array[array.length - 1]

   return positives < negatives ? negatives : positives
};

// largestProductOfThree([2, 1, 3, 7]) === 42
// largestProductOfThree([2, 5, 3, 7])//.should.equal(105);
// largestProductOfThree([11, 7, 5, 3, 2])//.should.equal(385);
// largestProductOfThree([2, 13, 7, 3, 5, 11])//.should.equal(1001);
// largestProductOfThree([2, 11, 13, 7, 13, 3, 11, 5])//.should.equal(1859);
// largestProductOfThree([2, 3, -11, 7, 5, -13])//.should.equal(1001);
// largestProductOfThree([-31, 41, 34, -37, -17, 29])//.should.equal(47027);
// largestProductOfThree([-1, -2, -3, -4, -5, -6])//.should.equal(-6);