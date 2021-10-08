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

  var resultWords = [];
  // var places = Object.keys(numbersToPlace);

  var tensAndOnes = (number) => {
    var tensOnesInt = number % 100;
    var tensOnesWords = [];
    if (tensOnesInt < 21 && tensOnesInt > 0) {
      return numbersToWords[tensOnesInt];
    }
    var tensInt = Math.floor(tensOnesInt / 10) * 10;
    var onesInt = number % 10;
    if (tensInt) {
      tensOnesWords.push(numbersToWords[tensInt]);
    }
    if (onesInt) {
      tensOnesWords.push(numbersToWords[onesInt]);
    }
    return tensOnesWords.join('-');
  };

  var hundreds = (number) => {
    var hundredsInt = Math.floor((number % 1000) / 100);
    var hundredsWords = [];
    if (hundredsInt) {
      hundredsWords.push(numbersToWords[hundredsInt]);
      hundredsWords.push(numbersToPlace[100]);
    }
    return hundredsWords.join(' ');
  };

//   if (numbersToPlace[this]) {
//     return 'one' + numbersToPlace[this];
//   }

  if (this < 21) {
    return numbersToWords[this];
  }
  var tensOnesString = tensAndOnes(this);
  if (tensOnesString.length) {
    resultWords.push(tensOnesString);
  }
  var hundredsString = hundreds(this);
  if (this >= 100 && hundredsString.length) {
    resultWords.unshift(hundredsString);
  }

  //iterate along places array while the key is less than "this"

  for (var i = 1000; i <= this; i *= 1000) {
    var setInt = Math.floor((this % (1000 * i)) / i);
    var setWords = [];
    if (setInt) {
      if (setInt >= 100) {
        setWords.push(hundreds(setInt));
      }
      if (tensAndOnes(setInt).length) {
        setWords.push(tensAndOnes(setInt));
      }
      setWords.push(numbersToPlace[i])
    }
    if (setWords.length) {
      resultWords.unshift(setWords.join(' '));
    }
  }

  return resultWords.join(' ');

};


// if (this > 1000) {
//   result = thousands(this) + ' ' + result;
// }
// if (this > 1000000) {
//   result = millions(this) + ' ' + result;
// }
// if (this > 1000000000) {
//   result = billions(this) + ' ' + result;
// }
// if (this > 1000000000000) {
//   result = trillions(this) + ' ' + result;
// }
// if (this > 1000000000000000) {
//   result = quadrillions(this) + ' ' + result;
// }
// if (this > 1000000000000000000) {
//   result = quintillions(this) + ' ' + result;
// }

  // var thousands = (number) => {
    //   // use hundreds and tensAndOnes helpers here
    //   var thousandsInt = Math.floor((number % 1000000) / 1000);
    //   var thousandsWords = [];
    //   if (thousandsInt) {
      //     if (thousandsInt > 100) {
        //       thousandsWords.push(hundreds(thousandsInt));
        //     }
        //     thousandsWords.push(tensAndOnes(thousandsInt));
        //     thousandsWords.push(numberstoPlace[1000])
        //   }
        //   return thousandsWords.join(' ');
        // };

        // var millions = (number) => {
          //   // use hundreds and tensAndOnes helpers here
          //   var thousandsInt = Math.floor((number % 1000000) / 1000);
          //   var thousandsWords = [];
          //   if (thousandsInt) {
            //     if (thousandsInt > 100) {
              //       thousandsWords.push(hundreds(thousandsInt));
              //     }
              //     thousandsWords.push(tensAndOnes(thousandsInt));

              //   }
  //   return thousandsWords.join(' ');
  // };

  // var billions = (number) => {
  //   // use hundreds and tensAndOnes helpers here
  //   var billionsInt = Math.floor((number % 1000000000000) / 1000000000);
  //   var billionsString = '';
  //   if (billionsInt > 100) {
  //       billionsString += hundreds(billionsInt) + ' ';
  //   }
  //   billionsString += tensAndOnes(billionsInt);
  //   return billionsString + ' ' + numbersToPlace[1000000000];
  // };

  // var trillions = (number) => {
  //   // use hundreds and tensAndOnes helpers here
  //   var trillionsInt = Math.floor((number % 1000000000000000) / 1000000000000);
  //   var trillionsString = '';
  //   if (trillionsInt > 100) {
  //       trillionsString += hundreds(trillionsInt) + ' ';
  //   }
  //   trillionsString += tensAndOnes(trillionsInt);
  //   return trillionsString + ' ' + numbersToPlace[1000000000000];
  // };

  // var quadrillions = (number) => {
  //   // use hundreds and tensAndOnes helpers here
  //   var quadrillionsInt = Math.floor((number % 1000000000000000000) / 1000000000000000);
  //   var quadrillionsString = '';
  //   if (quadrillionsInt > 100) {
  //       quadrillionsString += hundreds(quadrillionsInt) + ' ';
  //   }
  //   quadrillionsString += tensAndOnes(quadrillionsInt);
  //   return quadrillionsString + ' ' + numbersToPlace[1000000000000000];
  // };

  // var quintillions = (number) => {
  //   // use hundreds and tensAndOnes helpers here
  //   var quintillionsInt = Math.floor((number % 1000000000000000000000) / 1000000000000000000);
  //   var quintillionsString = '';
  //   if (quintillionsInt > 100) {
  //       quintillionsString += hundreds(quintillionsInt) + ' ';
  //   }
  //   quintillionsString += tensAndOnes(quintillionsInt);
  //   return quintillionsString + ' ' + numbersToPlace[1000000000000000000];
  // };