/**
 * Extend the Number prototype with a new method called `toEnglish`.
 * It should return the number as a string using English words.
 * Examples:
 *   (7).toEnglish(); // > "seven"
 *   (575).toEnglish(); // > "five hundred seventy-five"
 *   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
 *
 * Extra credit: Make your function support decimals.
 * Example:
 *   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
 *
 */

var numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
};
var numbersToPlace = {
    10: 'ten',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function() {
  const numStr = this.toString();
  const translate = function(numStr) {
    let result = '';
    const len = numStr.length;
    if (len === 1) {
      return numbersToWords[numStr];
    }
    if (numStr === '000') {
      return '';
    }
    if (len === 3 && numStr.substring(0, 2) === '00') {
      return numbersToWords[numStr[2]];
    }
    if (len === 3 && numStr.substring(1) === '00') {
      return numbersToWords[numStr[0]] + ' hundred';
    }
    if (len === 3 && numStr[1] === '0') {
      return numbersToWords[numStr[0]] + ' hundred' + numbersToWords[numStr[2]];
    }
    if (numStr[len - 2] === '1' || numStr[len - 1] === '0') {
      result = numbersToWords[numStr.substring(len - 2, len)];
    } else if (numStr[len - 2] !== '0') {
      const val = numStr[len - 2] + '0';
      result = numbersToWords[val] + '-' + numbersToWords[numStr[len - 1]] ;
    }
    if (len === 3 && numStr[0] !== '0') {
      result = numbersToWords[numStr[0]] + ' hundred ' + result;
    }
    return result;
  };
  let result = '';
  let str = '';
  let endInd = numStr.length;
  let startInd = endInd >= 3 ? endInd - 3 : 0;
  let count = 1;
  while (endInd > 0) {
    str = translate(numStr.substring(startInd, endInd));
    if (count > 1 && str !== '') {
      str += ' ' + numbersToPlace[count];
    }
    if (result !== '') {
      result = str + ' ' + result;
    } else {
      result = str;
    }
    endInd -= 3;
    startInd = endInd >= 3 ? endInd - 3 : 0;
    if (count === 1000000000000000000) {
      count = 1;
    } else {
      count *= 1000;
    }
  }
  return result;
};
