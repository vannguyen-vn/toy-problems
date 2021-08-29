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
  let results = [];
  let tempStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      tempStr += str[i];
    }
  }
  let max = tempStr.length;
  let helper = (currentLength, string, current) => {
    if (string.length === currentLength) {
      results.push(string);
    } else {
      for (let j = current; j < max; j++) {
        let newString = string + tempStr[j];
        let currentIdx = j + 1;
        helper(currentLength, newString, currentIdx);
      }
    }
  }
  for (let i = 0; i <= max; i++) {
    helper(i, '', 0);
  }
  return results;
};

// console.log(powerSet('jump'));