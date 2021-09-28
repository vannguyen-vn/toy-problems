
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
const letters = Object.keys(DIGIT_VALUES);
if (typeof romanNumeral !== 'string') return null;
  let numerals = romanNumeral.split('')
  var result = 0;
  for (let i = 0; i < numerals.length; i++) {
    if (letters.indexOf(numerals[i]) === -1) {
      return false;
    } else {
      let num = DIGIT_VALUES[numerals[i]];
      let next = DIGIT_VALUES[numerals[i + 1]];
      if (next === undefined) {
        return result += num;
      }
      if (num < next) {
        result -= num;
      } else {
        result += num;
      }
    }
  }
  return result;
};

// console.log(translateRomanNumeral("IV"))
// console.log(translateRomanNumeral("LI"))