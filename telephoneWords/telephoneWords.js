/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  var resultArray = [];

  var stringBuilder = function(numberString, baseString) {
    if (baseString.length === digitString.length) {
      resultArray.push(baseString);
      return;
    }
    for (var i = 0; i < numberString.length; i ++) {
      var remainingString = numberString.slice(i + 1);
      var currentDigit = numberString[i];
      //  for each, iterate across the possible letters
      for (var j = 0; j < phoneDigitsToLetters[currentDigit].length; j++) {
        var newBase = baseString + phoneDigitsToLetters[currentDigit][j];
        stringBuilder(remainingString, newBase);
      }
    }

  }

  stringBuilder(digitString, '');
  return resultArray;
  // base case
  //  last number in the string of numbers (numberString is down to 0 length)
  //  concat base string with each possible letter, push into resultArray
  //
  // recursive case
  //  iterate across the string of numbers
  //    for each number, iterate across the possible letters
  //      for each letter, concat with base string, then call the recursive function on the remaining number string and the new base string
};
