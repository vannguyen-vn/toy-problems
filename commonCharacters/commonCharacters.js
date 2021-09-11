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

    var resultStr = '';
    var arrStr = string1.split('');
    for (var i = 0; i < arrStr.length; i++) {
      for (var j = 0; j < string2.length; j++) {
        if (arrStr[i] === string2[j]) {
          resultStr += arrStr[i]
          arrStr.splice(i, 1)
        }
      }
    }
    return resultStr
  };
