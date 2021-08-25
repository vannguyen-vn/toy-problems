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

  //create an array var
  var wordCombinationList = [];
  //create an empty string var
  var wordCombination = '';

  //create an array from arguments
  var args = Array.prototype.slice.call(arguments, 0, 1)[0]

  const combinationVariationHelper = (argsIndex) => {
    console.log(argsIndex)
  //create an internal function that takes an index of the arguments array

  //if arguments at index one is undefined
  if (args[argsIndex] === undefined) {
    //push the string into the array
    wordCombinationList.push(wordCombination)
    //set the string to ""
    wordCombination = '';
  }

  //For Each letter option add the letter option to the string, and call innerHelperFunction for the next number in the arguments array
  let letterOptionsArray = phoneDigitsToLetters[args[argsIndex]]
  letterOptionsArray.forEach(combinationVariationHelper)

  //close the inner helper function
  }

  //call on each of the arguments
  for (var i = 0; i < args.length; i++) {
    combinationVariationHelper(i);
  }

  return wordCombinationList
};

var numbers1 = [2, 3];
var test1 = telephoneWords(numbers1).length === 9;
console.log('should be true', test1)


/*
Inputs: Up to (but not necessarily) four numbers
Outcomes: 1 array containing all permutations of the letter options from those four numbers (Order matters)
Constraints: Inputs must be numbers. Must have at least one number. Numbers must maintain their position (example ends with a c as the first letter)
Edge Case: 1 and 0 should be left as numbers

Process:

//create an array var
//create an empty string var


//create an internal function that takes an index of the arguments array

//if arguments at index plus one is undefined
  //push the string into the array
  //set the string to ""

//For Each letter option add the letter option to the string, and call innerHelperFunction for the next number in the arguments array

//close the inner helper function

//call on each of the arguments


------

//Sample Data
input(2, 3)

returnArray = ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"];
string = ""
arguments = [2, 3]

innerHelperFunction(0)

*/

// var phoneDigitsToLetters = {
//   0: '0',
//   1: '1',
//   2: 'ABC',
//   3: 'DEF',
//   4: 'GHI',
//   5: 'JKL',
//   6: 'MNO',
//   7: 'PQRS',
//   8: 'TUV',
//   9: 'WXYZ'
// };
