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

  if (number = Math.ceil(number) % number > 0)
    { number.toString() }
    else { number + '.0'; }

  let fractions = number.split('.');
  let numerator = 0;

  while(fractions[1] !== '0') {
    let num = 1 / (1 - Number(fractions[1]));
    fractions = num.split('.');
  }

  let denominator = Number(fractions[1]);
  console.log(denominator);
};