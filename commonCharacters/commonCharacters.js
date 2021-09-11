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



var commonCharacters = function (string1, string2) {

  var container = {}
  var result = '';

  for (var i = 0; i < string1.length; i++) {
    container[string1[i]] = true;
  }

  for (var j = 0; j < string2.length; j++) {
    if (container.hasOwnProperty(string2[j])) {
      result += string2[j];
    }
  }
  return result;
};