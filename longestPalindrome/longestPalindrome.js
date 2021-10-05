/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

// input: string
// output: string (longest palindrome)
// constraints: whitespaces count at characters
// edge cases: one letter returns itself, if no palindromes return empty string?
var longestPalindrome = function (string) {
  if (string.length === 0) {
    return ""
  }
  var candidates = []
  for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
      candidates.push(string.slice(i, j + 1))
    }
  }
  candidates = candidates.filter(function (candidate) {
    // is it a palindrome
    var startInd = 0
    var endInd = candidate.length - 1
    while (startInd < endInd) {
      if (candidate[startInd] !== candidate[endInd]) {
        return false
      }
      startInd++
      endInd--
    }
    return true
  })

  // find longest candidate
  return candidates.reduce(function (longest, palindrome) {
    if (palindrome.length > longest.length) {
      return palindrome
    } else {
      return longest
    }
  }, candidates[0])

};

console.log(longestPalindrome("My dad is a racecar athlete")) // "a racecar a"