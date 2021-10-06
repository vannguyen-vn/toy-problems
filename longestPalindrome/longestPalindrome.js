/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var reverseStr = string.split('').reverse().join('');
  var startInd = 0;
  var endInd = 0;
  var result = '';
  while (endInd < string.length) {
    var currStr = string.slice(startInd, endInd + 1);
    if (reverseStr.indexOf(currStr) === -1) {
      startInd++;
      endInd++;
    } else {
      result = currStr;
      endInd++;
    }
  }
  return result;
};
