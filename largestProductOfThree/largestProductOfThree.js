/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  if (array.length < 3 ) {
    return null;
  }

  if (array.length === 3) {
    return array[0] * array[1] * array[2]
  }

  array.sort(function(a, b) {
    return b-a
  })

  return array[0] * array[1] * array[2];
};

var test1 =
largestProductOfThree([2, 5, 3, 7])

var test2 =
largestProductOfThree([11, 7, 5, 3, 2])

var test3 =
largestProductOfThree([2, 13, 7, 3, 5, 11])

var test4 =
largestProductOfThree([2, 11, 13, 7, 13, 3, 11, 5])

console.log('should be 105', test1)
console.log('should be 385', test2)
console.log('should be 1001', test3)
console.log('should be 1859', test4)