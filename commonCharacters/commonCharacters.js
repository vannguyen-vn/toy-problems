/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function (...strings) {
  // TODO: Your code here!
  var commonStr = '';
  var commonObj = {};

  for (string of strings) {
    for (var i = 0; i < string.length; i++) {
      if (commonObj[string[i]] === undefined) {
        commonObj[string[i]] = 1;
      } else {
        commonObj[string[i]]++;
      }
    }
  };

  for (var key in commonObj) {
    if (commonObj[key] === strings.length && key !== ' ') {
      commonStr += key;
    }
  }

  return commonStr;
};
