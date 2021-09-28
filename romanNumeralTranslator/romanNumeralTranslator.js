
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

  if (typeof (romanNumeral) !== 'string') {
    return null;
  }

  if (romanNumeral === "") {
    return 0;
  }

  var len = romanNumeral.length;
  var total = DIGIT_VALUES[romanNumeral[len - 1]];

  for (var i = len - 2; i >= 0; i--) {
    if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
      total -= DIGIT_VALUES[romanNumeral[i]];
    } else {
      total += DIGIT_VALUES[romanNumeral[i]];
    }
  }
  return total;
};

// 01
// IV


// var translateRomanNumeral = function (romanNumeral) {

//   if (typeof (romanNumeral) !== 'string') {
//     return null;
//   }

//   if (romanNumeral === "") {
//     return 0;
//   }

//   var total = 0;

//   for (var i = romanNumeral.length - 1; i >= 0; i--) {
//     if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
//       total -= DIGIT_VALUES[romanNumeral[i]];
//     } else {
//       total += DIGIT_VALUES[romanNumeral[i]];
//     }
//   }
//   return total;
// };


