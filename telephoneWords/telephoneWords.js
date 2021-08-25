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
  // Create return array
  var results = [];
  // Create variable for combo string
  var combo = '';
  // Create inner recursive function
  var innerFunc = function(combo) {
    // Base Case: if word length is equal to digit length
    if (combo.length === digitString.length) {
      // push into result array
      results.push(combo);
    }
    // Create index variable
    var currIndex = digitString[combo];
    // Set Object lookup to currIndex
    var currNum = phoneDigitsToLetters[currNum];
  // Iterate over digit string
    for (var i = 0; i < currNum.length; i++) {
      // For each letter add to combo string
      combo += currNum[i];
    }
    // Push combo onto results array
    results.push(combo)
    // Recursively call innerFunc
    innerFunc(combo);
    // Return array
    return results;
  }
};
