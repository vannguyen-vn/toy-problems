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

// first we need to loop over the digit string
// for every digit, we will have access to a string of letters
// for each string of letters, we must iterate over it and save the first letter in the string

// what is the base case?
// when we have one number we need to return an array of each one of those letters at a different index
// once we are done iterating over the number

// take the digit string at index 0
// take the letters at index 0 of the string
// add it to the string

var telephoneWords = function(digitString) {
  var result = [];
  var innerFunc = (numString, letterString) => {
    if (letterString.length === digitString.length) {
      result.push(letterString)
      return;
    }
    for (var i = 0; i < phoneDigitsToLetters[numString[0]].length; i++) {
      let currentLetter = phoneDigitsToLetters[numString[0]][i];
      let newLetterString = letterString + currentLetter;
      let newNumString = numString.slice(1);
      innerFunc(newNumString, newLetterString);
    }
  }
  innerFunc(digitString, '');
  return result;
};
