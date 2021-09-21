//Attempted: Sep 11 2021

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

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var commonTwo = function(str1, str2) {
    var resultTwoString = '';
    for (var i = 0; i < str1.length; i++) {
      if (str2.includes(str1[i])) {
        resultTwoString = resultTwoString.concat(str1[i]);
      }
    }
    return resultTwoString;
  }

  var result = arguments[0];
  for (var j = 0; j < arguments.length; j++) {
    result = commonTwo(result, arguments[j]);
  }
  return result;
};
