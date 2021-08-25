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

// input: string- with 4 chars(nums)
// output: array of all possible letter combos that could come from the four numbers (only in the given order)
// constraints: N/A
// edge cases: if 0, or 1 is included they should be left as numbers
var telephoneWords = function(digitString) {
  var wordPossibilities = []
 // loop through the string
 for (var i = 0; i < digitString.length; i++) {
   // create a temporary string to add letters to
   var tempWord = ''
    // for each char
    var num = digitString[i]
    var possibleLetters = phoneDigitsToLetters[num]
    // loop through letter options associated with that number
    for (var j = 0; j < possibleLetters.length; j++){
        var currentLetter = possibleLetters[j]
        // add first char associated to the temporary str
        tempWord += currentLetter
           console.log(tempWord)
    }
    wordPossibilities.push(tempWord)
 }
  return wordPossibilities
};

//Example:
  var test1 = telephoneWords('2745');
  // => ['APGJ',
  //      'APGK',
  //      'APGL',
  //      ..., // many many more of these
  //      'CSIL']
console.log(test1)
var test2 = telephoneWords('0946')
console.log(test2)
