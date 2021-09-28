
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

var translateRomanNumeral = function (romanNumeral) {
  if (typeof romanNumeral === 'number') {
    return null;
  }

  var result = 0

  for (var i = 0; i < romanNumeral.length; i++) {
    var numeral = romanNumeral[i];
    var next = romanNumeral[i + 1];

    if (romanNumeral[i + 1] === undefined) {
      result += DIGIT_VALUES[numeral];
      return result;
    } else if (DIGIT_VALUES[next] > DIGIT_VALUES[numeral]) {
      result -= DIGIT_VALUES[numeral];
      continue;
    } else {
      result += DIGIT_VALUES[numeral]
    }
  };

  return result;
}
