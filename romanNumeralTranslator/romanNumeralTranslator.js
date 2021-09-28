
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

/*
I: roman munberal
O: number
C: only one smaller numeral may appear in front of larger one
E: input is not string --> null
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

  var result = 0;
  for(var i = 0; i < romanNumeral.length; i++) {
    var romanVal = DIGIT_VALUES[romanNumeral[i]];
    var nextRomanVal = DIGIT_VALUES[romanNumeral[i + 1]]

    if (romanVal === undefined) {
      return null
    } else if (i === romanNumeral.length - 1) {
      result += romanVal
      return result;
    } else if (romanVal < nextRomanVal) {
      result -= romanVal;
    } else {
      result += romanVal;
    }
  }
  return result;
};

translateRomanNumeral("LX") // 60
translateRomanNumeral("IV") // 4
