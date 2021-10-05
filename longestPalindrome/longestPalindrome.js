/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  let result = '';

  const findPalindrome = (left, right) => {
    while (left >= 0 && right < string.length && string[left] === string[right]) {
      left--;
      right++;
    }

    if (right - left > result.length) {
      result = string.slice(left + 1, right);
    }
  }

  for (var i = 0; i < string.length; i++) {
    findPalindrome(i, i + 1);
    findPalindrome(i, i);
  }

  return result;
};

// console.log(longestPalindrome("My dad is a racecar athlete"));
