
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
  if (typeof romanNumeral !== 'string') {
    return null;
  }

  var rnArray = romanNumeral.split('');

  if (rnArray.length === 1) {
    return DIGIT_VALUES[rnArray[0]]
  }

  var total = 0;
  var currentRN = romanNumeral[0]
  var nextRN = romanNumeral[1]

  while (nextRN !== undefined) {
    if (DIGIT_VALUES[currentRN] >= DIGIT_VALUES[nextRN]) {
      total += DIGIT_VALUES[currentRN] + DIGIT_VALUES[nextRN]
    } else {
      total += (DIGIT_VALUES[nextRN] - DIGIT_VALUES[currentRN])
    }
    currentRN = nextRN;
    nextRN = rnArray[nextRN + 1]
  }

  return total;
};

// var test1 = translateRomanNumeral('IV')
var test2 = translateRomanNumeral('XIV')
var test3 = translateRomanNumeral('MCM')

console.log(test1, test2, test3)
