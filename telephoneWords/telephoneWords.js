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
  //eg: 2345
  var prevLetters = [''];

  for (var i = 0; i < digitString.length; i++) {
    var possPerm = [];

    for (var k=0; k < prevLetters.length; k++) {
      //second iteration of outer loop, we loop through ['A', 'B', 'C']
      //third iteration of outer loop, we loop through [AD, AE, AF, BD, BE, BF, CD, CE, CF]
      for(var letter of phoneDigitsToLetters[digitString[i]]) {
        //loop through the poss letters the current digit could represent and append it to each of the previous combinations
        //first iteration of outer loop: 2 was the first digit, prevLetters would now be ['A', 'B', 'C']
        //second iteration of outer loop: 3 maps to D E F, so prevLetters [AD, AE, AF, BD, BE, BF, CD, CE, CF]
        //third iteration of outer loop: 4 maps to G H I, so prevLetters [ADG, ADH, ADI, AEG, AEH, AEI...]
        possPerm.push(prevLetters[k].concat(letter))

      }
    }

    if (i === (digitString.length - 1)) {
      return possPerm;
    }

    prevLetters = possPerm;
    //place new combinations in outer scope
  }

};
