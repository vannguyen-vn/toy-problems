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

 var simplify = function (fraction) {
  if (fraction[0] % 5 === 0) {
    fraction[0] = fraction[0] / 5;
    fraction[1] = fraction[1] / 5;
  } else if (fraction[0] % 2 === 0) {
    fraction[0] = fraction[0] / 2;
    fraction[1] = fraction[1] / 2;;
  }
  return fraction;
}

var toFraction = function(number) {
  if (number - Math.floor(number) === 0) {
    return `${Math.floor(number)}/1`;
  }
  var length = number.toString().length - number.toString().indexOf('.') - 1;
  var fraction = [Math.floor(number * Math.pow(10, length)), Math.pow(10, length)];
  var isNotSimplified = (fraction[0] % 5 === 0 && fraction[1] % 5 === 0) || (fraction[0] % 2 === 0 && fraction[1] % 2 === 0);
  while (isNotSimplified) {
    fraction = simplify(fraction);
    isNotSimplified = (fraction[0] % 5 === 0 && fraction[1] % 5 === 0) || (fraction[0] % 2 === 0 && fraction[1] % 2 === 0);
  }
  return `${fraction[0]}/${fraction[1]}`;
};

