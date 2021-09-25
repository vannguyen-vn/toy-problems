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
  args = Array.prototype.slice.call(arguments);
  var mainStr = args[0];
  var strArr = args.slice(1);
  var result = '';
  var isCommonChar = function(char) {
    for (var i = 0; i < strArr.length; i++) {
      if (strArr[i].indexOf(char) === -1) {
        return false;
      }
    }
    return true;
  }
  for (var i = 0; i < mainStr.length; i++) {
    if (isCommonChar(mainStr[i])) {
      result += mainStr[i];
    }
  }
  return result;
};
