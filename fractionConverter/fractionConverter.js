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
  if (Number.isInteger(number)) {
    return `${number}/1`;
  } else if (number < 1) {
    return `1/${1/number}`;
  } else {
    return `${1 + Number.parseInt * (1/(number - Number.parseInt(number)))}/${1/(number - Number.parseInt(number))}`;
  }
};
