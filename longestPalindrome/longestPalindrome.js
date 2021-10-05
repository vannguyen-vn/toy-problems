/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var isPalindrome = (string) => {
  string = string.split('');
  while (string.length > 1) if (string.shift() !== string.pop()) return false
  return true;
}

var longestPalindrome = function (string) {
  let start = 0;
  let end = 3;
  let longest;

  while (end < string.length) {
    while (isPalindrome(string.substring(start, end))) {
      longest = string.substring(start, end);
      start--;
      end++;
    }
    start++;
    end++;
  }

  return longest;
};

console.log(longestPalindrome('My dad is a racecar athlete'));
