/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  if (number % 1 === 0) {
    return (`${number}/1`)
  }
  var denominator = 1
  var decimalPlaces = number.toString().split('.')[1].length;
  for (var i = 1; i <= decimalPlaces; i++) {
    number *= 10;
    denominator *= 10;
  }
  for (var i = number; i > 1; i--) {
    if (number % i === 0 && denominator % i ===0) {
      number /= i;
      denominator /= i;
    }
  }
  return `${number}/${denominator}`
};

// module.exports = toFraction;