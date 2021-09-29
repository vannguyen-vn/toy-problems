/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var sortedArr = array.sort((a,b)  => a - b);
  var lengthOfArr = array.length

  var result1 =  sortedArr[lengthOfArr - 1] * sortedArr[lengthOfArr - 2] * sortedArr[lengthOfArr - 3]
  var result2 =  sortedArr[0] * sortedArr[1] * sortedArr[lengthOfArr - 1]

  return Math.max(result1, result2);

};
