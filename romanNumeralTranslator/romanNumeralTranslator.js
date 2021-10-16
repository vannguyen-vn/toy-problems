
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // Check if string, if not return null
  if (typeof romanNumeral !== 'string') {
    return null;
  }

  // variable to hold final result
  let result = 0;

  // iterate through given string
  for (let i = 0; i < romanNumeral.length; i++) {
    // Grab the first two characters of the roman numeral
    let first = DIGIT_VALUES[romanNumeral[i]];
    let second = DIGIT_VALUES[romanNumeral[i + 1]];
    let sum;

    // If the first value is smaller than the second, subtract the first from the second
    if(first < second) {
      sum = second - first;
      i++;
    }

    // If the result and sum combine to 0, return the current roman numeral, else return t
    result += sum ? sum : DIGIT_VALUES[romanNumeral[i]];
  }

  // Return the final result
  return result;
};