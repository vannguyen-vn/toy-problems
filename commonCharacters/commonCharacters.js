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
  var result = '';
  var str1 = strCheckLetter(string1);
  var str2 = strCheckLetter(string2);
  for (var i = 0; i < string1.length; i++) {
    var char = string1[i];
    if (str1[char] && str2[char] && result.indexOf(char) === -1) {
      result += char;
    }
  }
  return result;
};


var strCheckLetter = function (string) {
  var stringArr = string.split('');
  return stringArr.reduce((charArr, char) => {
    if (char.match(/[a-z]/i)) {
      charArr[char] = true;
    }
    return charArr;
  }, {})
}
