/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const reverseString = (string) => {
  return string.split('').reverse().join('')
};

const isPalindrome = (string) => {
  string = string.toLowerCase()
  return string === reverseString(string);
}

var longestPalindrome = function (string) {
  string = string.toLowerCase();
  var palindromeList = [];
  var possiblePalindrome = ''
  for (var i = 0; i < string.length; i++) {
    var firstPointer = string[i];
    for (var j = string.length - 1; j >= 0; j--) {
      var lastPointer = string[j];
      if (j === i) {
        break
      } else if (firstPointer === lastPointer) {
        possiblePalindrome = string.slice(i, [j+1])
        if (isPalindrome(possiblePalindrome)) {
          palindromeList.push(possiblePalindrome)

        }
      }
    }
  }
  var longestPalindrome = possiblePalindrome[0];
  for (var k = 0; k < palindromeList.length; k++) {
    var palindrome = palindromeList[k];
    if (palindrome.length > longestPalindrome.length) {
      longestPalindrome = palindrome;
    }
  }
  return longestPalindrome;
};