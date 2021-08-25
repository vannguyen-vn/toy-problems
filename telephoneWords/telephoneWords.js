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
  var results = []
  if(digitString.length !== 4) {
    console.log('THERE WAS AN ERROR!!!!!');
  }
  // digit string = [5,2,3,4];
  for(var i = 0; i < phoneDigitsToLetters[digitString[0]].length; i++) {
    currString = '';
    currString += phoneDigitsToLetters[digitString[0]][i];

    for(var j = 0; j < phoneDigitsToLetters[digitString[1]].length; j++) {
      if(currString.length === 4) {
        currString = currString.substring(0, currString.length - 3);
      }
      currString += phoneDigitsToLetters[digitString[1]][j];

      for(var k = 0; k < phoneDigitsToLetters[digitString[2]].length; k++) {
        if(currString.length === 4) {
          currString = currString.substring(0, currString.length - 2);
        }
        currString += phoneDigitsToLetters[digitString[2]][k];

        for(var l = 0; l < phoneDigitsToLetters[digitString[3]].length; l++) {
          if(currString.length === 4) {
            currString = currString.substring(0, currString.length - 1);
          }
          currString += phoneDigitsToLetters[digitString[3]][l];
          results.push(currString);
        }
      }
    }
  }
  return results;
};

var digitString = [7,9,3,7];
var word = telephoneWords(digitString);

console.log(word);

console.log(phoneDigitsToLetters[digitString[3]]);
console.log(phoneDigitsToLetters[digitString[3]][0]);