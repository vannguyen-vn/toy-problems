/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {

  var longestPalindrome = null;
  var checkNextLetterStringLength = 1;

  var checkNextLetter = function(abbrevStr) {
    //if the length of the string is equal to the input string length (for the main function)
      //return
    if (abbrevStr.length === string.length) {
      return;
    }

    //if isPalindrome && longer than longest palindrome
      //longest palindrome = inner palindrome
    if (isPalindrome(abbrevStr) && abbrevStr.length > longestPalindrome.length) {
      longestPalindrome = abbrevStr;
    }

    //return checkNextLetter
    return checkNextLetter(0, (abbrevStr.length + 1));
  }

  checkNextLetter(string.slice(0, 1));

  return longestPalindrome;
};


var isPalindrome = function(string) {
  while (string[0] === string[string.length -1]) {
    if (string.length === 0 || string.length === 1) {
      return true
    } else {
      return isPalindrome(string.slice(1, string.length-2));
    }
  }

  return false;
}


console.log(longestPalindrome("My dad is a racecar athlete"))

/*

var longestPalindrome = function (string) {
  var strings = string.split(' ') //"My dad is a racecar athlete" ["My" "dad" "is" "a" "racecar" "athlete"]

  var longestPalindrome = null; //racecar

  strings.forEach(string => {
    if ((isPalindrome(string) && !longestPalindrome) || (isPalindrome(string) && string.length > longestPalindrome.length)) {
      longestPalindromoe = string;
    }
  })

  return longestPalindrome;
};


var isPalindrome = function(string) {
  while (string[0] === string[string.length -1]) {
    if (string.length === 0 || string.length === 1) {
      return true
    } else {
      return isPalindrome(string.slice(1, string.length-2));
    }
  }

  return false;
}


console.log(longestPalindrome("My dad is a racecar athlete"))
*/