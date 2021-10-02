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
  //multiply by 2 until is a whole number, keep track of how many times you multiplied, and return a string of the number / times multiplied + 1
  // 'whole number / (whole number / original number)'
  //what should the condition be to check if its a whole number
  var original = number;
  // console.log(Number.isInteger(number), number);
  while (!Number.isInteger(number)) {
    number = number * 2;
    if (Number.isInteger(number)) {
      return `${number}/${number/original}`;
    }
  }
  return `${number}/1`
};

// console.log(toFraction(1.5));
