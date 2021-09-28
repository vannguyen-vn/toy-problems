
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

// input: string (Roman Numeral)
// output: number
// constraints: N/A
// edge cases: if not string, return null
var translateRomanNumeral = function(romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return null
  }

  if (romanNumeral.length === 0) {
    return 0
  }


  var numbers = []

  // loop through each char
  for (var i = 0; i < romanNumeral.length; i++) {
    // for each check the value for that letter in the obj and push to array
    numbers.push(DIGIT_VALUES[romanNumeral[i]])
  }

  if (numbers.length === 1) {
    return numbers[0]
  }

   // loop through number array
   for (var j = 0; j < numbers.length; j++) {
    // compare each two numbers
    // if the first number is smaller than the second number
    if(numbers[j] < numbers[j + 1]) {
      // return second value minus first value
      return numbers[j + 1] - numbers[j]
    } else {// otherwise
      // return second value plus first value
      return numbers[j + 1] + numbers[j]
    }
   }

};

translateRomanNumeral("LX") // 60
translateRomanNumeral("IV") // 4
