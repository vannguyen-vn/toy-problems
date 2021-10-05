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

var gcd = function (a, b) {
  if (b < 0.0000001) {
    return a;
  }
  return gcd(b, Math.floor(a % b));
};

var toFraction = function (number) {


  var len = number.toString().length - 2
  var denominator = Math.pow(10, len);
  var numerator = number * denominator;

  var GCD = gcd(numerator, denominator);

  numerator /= GCD;
  denominator /= GCD;

  var res = Math.floor(numerator) + "/" + Math.floor(denominator);

  return res;
};

