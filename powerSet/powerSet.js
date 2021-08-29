/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      newStr += str[i];
    }
  }
  var maxLen = newStr.length;
  var results = [];
  var innerFunc = (len, string, currInd) => {
    if (string.length === len) {
      results.push(string);
    } else {
      for (var j = currInd; j < maxLen; j++) {
        var newString = string + newStr[j];
        var newInd = j + 1;
        innerFunc(len, newString, newInd);
      }
    }
  }
  for (var i = 0; i <= maxLen; i++) {
    innerFunc(i, '', 0);
  }
  return results;
};
