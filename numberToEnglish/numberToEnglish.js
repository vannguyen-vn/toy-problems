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
  // return my value as english words
  // use condtionals to determine just how many places to use
  // within sets of 100s (for thousands, millions, etc.), use helper function
  // concat string with 'thousand', 'million', etc. as necessary

  //helper function
  // use % 100 to get last two digits
  //   use above objects and math to form words
  //

  var result = '';
  var places = Object.keys(numbersToPlace);

//   for (var i = 0; places[i] < this;) {

//   }

  var tensAndOnes = (number) => {
    if (number < 21) {
    return numbersToWords[number];
    }
    var ones = numbersToWords[number % 10];
    var tens = numbersToWords[Math.floor((number % 100) / 10) * 10];
    if (ones === 'zero') {
      return tens;
    }
    return '' + tens + '-' + ones;
  };

  var hundreds = (number) => {
    var hundredsInt = Math.floor((number % 1000) / 100);
    return '' + numbersToWords[hundredsInt] + ' ' + numbersToPlace[100];
  };

  var thousands = (number) => {
    // use hundreds and tensAndOnes helpers here
    var thousandsInt = Math.floor((number % 1000000) / 1000);
    var thousandsString = '';
    if (thousandsInt > 100) {
      thousandsString += hundreds(number);
    }
    thousandsString += tensAndOnes(number);
    return thousandsString + ' ' + numbersToPlace[1000];
  };

  var millions = (number) => {
    // use hundreds and tensAndOnes helpers here
    var millionsInt = Math.floor((number % 1000000000) / 1000000);
    var millionsString = '';
    if (millionsInt > 100) {
        millionsString += hundreds(number);
    }
    millionsString += tensAndOnes(number);
    return millionsString + numbersToPlace[1000000];
  };

  var billions = (number) => {
    // use hundreds and tensAndOnes helpers here
    var billionsInt = Math.floor((number % 1000000000000) / 1000000000);
    var billionsString = '';
    if (billionsInt > 100) {
        billionsString += hundreds(number);
    }
    billionsString += tensAndOnes(number);
    return billionsString + numbersToPlace[1000000000];
  };

  var trillions = (number) => {
    // use hundreds and tensAndOnes helpers here
    var trillionsInt = Math.floor((number % 1000000000000000) / 1000000000000);
    var trillionsString = '';
    if (trillionsInt > 100) {
        trillionsString += hundreds(number);
    }
    trillionsString += tensAndOnes(number);
    return trillionsString + numbersToPlace[1000000000000];
  };

  var quadrillions = (number) => {
    // use hundreds and tensAndOnes helpers here
    var quadrillionsInt = Math.floor((number % 1000000000000000000) / 1000000000000000);
    var quadrillionsString = '';
    if (quadrillionsInt > 100) {
        quadrillionsString += hundreds(number);
    }
    quadrillionsString += tensAndOnes(number);
    return quadrillionsString + numbersToPlace[1000000000000000];
  };

  var quintillions = (number) => {
    // use hundreds and tensAndOnes helpers here
    var quintillionsInt = Math.floor((number % 1000000000000000000000) / 1000000000000000000);
    var quintillionsString = '';
    if (quintillionsInt > 100) {
        quintillionsString += hundreds(number);
    }
    quintillionsString += tensAndOnes(number);
    return quintillionsString + numbersToPlace[1000000000000000000];
  };

  result += tensAndOnes(this);
  if (this > 100) {
    result = hundreds(this) + ' ' + result;
  }
  if (this > 1000) {
    result = thousands(this) + ' ' + result;
  }
  if (this > 1000000) {
    result = millions(this) + ' ' + result;
  }
  if (this > 1000000000) {
    result = billions(this) + ' ' + result;
  }
  if (this > 1000000000000) {
    result = trillions(this) + ' ' + result;
  }
  if (this > 1000000000000000) {
    result = quadrillions(this) + ' ' + result;
  }
  if (this > 1000000000000000000) {
    result = quintillions(this) + ' ' + result;
  }

  return result;

  //iterate along places array while the key is less than "this"
    //
};