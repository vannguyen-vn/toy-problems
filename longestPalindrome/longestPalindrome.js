/**
Implement a function that finds the longest palindrome in a given string.
For example, in the string "My dad is a racecar athlete", the longest
palindrome is "a racecar a". Count whitespaces as valid characters. Other
palindromes in the above string include "dad", "ete", " dad " (including
whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var result = '';

  if (string !== '') {
    for (var i = 0; i < string.length; i++) {
      for (var j = 0; j <= string.length; j++) {
        var sub = string.substring(i, j);
        var reverse = sub.split('').reverse().join('');
        if (sub === reverse && reverse.length > result.length) {
          result = sub;
        }
      }
    }
  }

  return result;
};
