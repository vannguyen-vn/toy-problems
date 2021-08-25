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

var telephoneWords = function(digitString, string) {
  var first = phoneDigitsToLetters[digitString[0]];
  var second = phoneDigitsToLetters[digitString[1]];
  var third = phoneDigitsToLetters[digitString[2]];
  var fourth = phoneDigitsToLetters[digitString[3]];

  var string = string || '';
  var result = [];

  if (string.length === 4)
    return string

  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      for (var k = 0; k < third.length; k++) {
        for (var l = 0; l < fourth.length; l++) {
          result = result.concat(telephoneWords(digitString, `${first[i]}${second[j]}${third[k]}${fourth[l]}`));
        }
      }
    }
  }

  return result;
};