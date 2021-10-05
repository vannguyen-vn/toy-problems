/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  let currentLongest = [0, 1]
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindrome(string, i-1, i+1);
    const even = getLongestPalindrome(string, i-1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
};

function getLongestPalindrome(str, leftIndex, rightIndex) {
  while (leftIndex >= 0 && rightIndex < str.length) {
    if (str[leftIndex] !== str[rightIndex]) break;
    leftIndex--;
    rightIndex++;
  }
  return [leftIndex+1, rightIndex];
}

// let example = "My dad is a racecar athlete";
// console.log(longestPalindrome(example));