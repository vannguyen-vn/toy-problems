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
 * Example: toFraction(3.75) === '15/4'
 *
 */

var toFraction = function(number) {
  number = Math.ceil(number) % number > 0 ? number.toString() : number + '.0';
  const fractions = number.split('.');
  let numerator = 0;

  while(fractions[1] !== '0') {
    const num = 1 / (1 - Number(fractions[1]));
    fractions = num.split('.');
  }
  const denominator = Number(fractions[1]);
  console.log(denominator);
};