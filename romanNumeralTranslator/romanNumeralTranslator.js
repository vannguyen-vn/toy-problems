
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
// TODO: Implement me!
// if it's not a string
//   return null

// iterate along the string
  // if the character's value is less than the next character's value
    // subtract
    // add the result to the running total
    // move on to the next next character
// else
  // add the current number to the total
  // move on to the next character

// return the total
if (typeof romanNumeral !== 'string') {
  return null;
}

var totalValue = 0;

for (i = 0; i < romanNumeral.length;) {
  if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
    let value = DIGIT_VALUES[romanNumeral[i + 1]] - DIGIT_VALUES[romanNumeral[i]];
    totalValue += value;
    i += 2;
  } else {
    totalValue += DIGIT_VALUES[romanNumeral[i]];
    i++;
  }
}

return totalValue;

};

// exports.romanNumeralTranslator = romanNumeralTranslator;
// exports.DIGIT_VALUES = DIGIT_VALUES;