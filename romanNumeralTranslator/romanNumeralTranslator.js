//Attempted Sep 27
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

  let sum = 0;
  for (var i = 0; i < romanNumeral.length; i++)   {
    if (!DIGIT_VALUES.hasOwnProperty(romanNumeral[i])) {
      return null;
    } else if (
      (romanNumeral[i] === 'I' || romanNumeral[i] === 'C' || romanNumeral[i] === 'X') &&
      (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]])
      ) {
        sum -= DIGIT_VALUES[romanNumeral[i]];
      } else {
        sum += DIGIT_VALUES[romanNumeral[i]];
      }
  }

  return sum;
};

/*

const s1 = 'III';
const s2 = 'IV';
const s3 = 'LX';
const s4 = 'MCMXCIV';
const s5 = 'MCMXCIA'
console.log(`s1: ${translateRomanNumeral(s1)}`); // 3
console.log(`s1: ${translateRomanNumeral(s2)}`); // 4
console.log(`s1: ${translateRomanNumeral(s3)}`); // 60
console.log(`s1: ${translateRomanNumeral(s4)}`); // 1994
console.log(`s1: ${translateRomanNumeral(s5)}`); // null
*/