/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var largest = [];
  array.forEach((num) => {
    if (largest.length < 3) {
      largest.push(num);
    } else {
      for (var i = 0; i < largest.length; i++) {
        if (num > largest[i]) {
          num = largest.splice(i, 1, num)[0];
        }
      }
    }
  });
  console.log(largest)
  return largest.reduce((a, b) => a * b)
};

module.exports = largestProductOfThree;