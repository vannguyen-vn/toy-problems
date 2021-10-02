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
  var decimal = number % 1;
  if (decimal === 0) {
    return `${number}/1`
  }
  var wholeNum = number - decimal;
  var denominator = 1/decimal
  var numerator = wholeNum * denominator + 1
  return `${numerator}/${denominator}`
};