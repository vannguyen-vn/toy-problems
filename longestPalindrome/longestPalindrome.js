/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j] && isPalindrome(string.substring(i, j + 1))) {
        if (string.substring(i, j + 1).length > result.length) {
          result = string.substring(i, j + 1);
        }
      }
    }
  }
  return result;
};

var isPalindrome = function (string) {
  var beg = 0;
  var end = string.length - 1;
  if (beg === end && string[beg] === string[end]) {
    return true;
  }
};

