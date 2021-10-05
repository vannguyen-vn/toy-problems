/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var longPal = '';

  //helper function
  var isPalindrome = (string) => {
    var i = 1;
    var j = string.length - 2;
    while (i < j) {
      if (string[i] === string[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }

  //search string for palindromes
  // var findPal = (string) => {
  for (var i = 0; i < string.length; i++) {
    var startSearch = i + 1
    var repeatInd = string.indexOf(string[i], startSearch);
    //if the first letter does not repeat
      //move on
    //if it does
    while (repeatInd > -1 && startSearch < string.length) {
      //if this section is a palindrome AND it's longer than longPal
      var substring = string.slice(i, repeatInd + 1);
      if (isPalindrome(substring) && substring.length > longPal.length) {
        //it replaces longPal
        longPal = substring;
      }
      //look for the next time the letter repeats and make that the new repeatInd
      startSearch = repeatInd + 1;
      repeatInd = string.indexOf(string[i], startSearch);
    }
  }
  // }

  return longPal;

};
