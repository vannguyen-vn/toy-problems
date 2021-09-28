
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
let lettersArray = romanNumeral.split('')
var isRomanNumeral = true;
for (let i = 0; i< lettersArray.length; i++){
  if(letters.indexOf(lettersArray[i]) === -1) {
    isRomanNumeral = false;
  }
}
// i - roman numeral - string
// o - number
// c - constrained to digit values
//   - if a smaller numeral appears before larger, subtract! limit one smaller numeral before the larger
// e - if input is not a string return null
//   - if input is not a digit value, return "not a roman numeral"
var result = 0;

if (!isRomanNumeral) return 'not a roman numeral';
let allNumbersArr = []
for(let i = 0; i<lettersArray.length; i++){
  let currentLetter = lettersArray[i];
  let num = DIGIT_VALUES[currentLetter];
  allNumbersArr.push(num)
}
for(let i = 0; i<allNumbersArr.length; i++){
  if(allNumbersArr[i+1] === undefined) {
    return result += allNumbersArr[i]
  }
  if (allNumbersArr[i] < allNumbersArr[i+1]) {
    result -= allNumbersArr[i]
  }
  else {
    result += allNumbersArr[i]
  }
}
return result;


};
// console.log(translateRomanNumeral("IVB"))
console.log(translateRomanNumeral("CXLIX"))
console.log(translateRomanNumeral("DCCLXXIX"))
console.log(translateRomanNumeral(""))
console.log(translateRomanNumeral(82137891))