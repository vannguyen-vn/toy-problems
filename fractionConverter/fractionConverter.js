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
  // convert to string
  // slice at the decimal
  // create two variables, whole and decimal
  // get length of decimal to set denominator (1, 10, 100, etc.) -- helper function?
  // convert them back into numbers
  // find greatest common factor of decimal and denominator --- helper function?
  // simplify them
  // multiply whole by new denominator
  // create string out of whole, '/', denominator

  var numAsString = '' + number;
  var decInd = numAsString.indexOf('.');
  var wholeString = numAsString.slice(0, decInd);
  if (decInd <= 0) {
    wholeString = '0';
  }
  var numeratorString = numAsString.slice(decInd + 1);
  var denominator = 10 ** (numeratorString.length);
  var whole = parseInt(wholeString);
  var numerator = parseInt(numeratorString);

  var simplify = () => {
    if (numerator % 5 === 0 && denominator % 5 === 0) {
      numerator /= 5;
      denominator /= 5;
      simplify();
    }
    if (numerator % 2 === 0 && denominator % 2 === 0) {
      numerator /= 2;
      denominator /= 2;
      simplify();
    }
    return;
  }
  //if the numeratorString ends in '5'
    // divide numerator and denominator by five
    // multiply whole by 5
  // if the numerator is evenly divisible by 2
    // divide numerator and denominator by 2
    // multiply whole by 2
  //.....repeat recursively until numerator can't be divided anymore
  simplify();
  return '' + ((denominator * whole) + numerator) + '/' + denominator;

};
