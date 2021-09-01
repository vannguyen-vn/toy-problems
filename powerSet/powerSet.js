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
  let letters = {};

  for (let i = 0; i < str.length; i++) {
    letters[str[i]] = true;
  }
  let lettersArr = Object.keys(letters);

  for (let j = 0; j < lettersArr.length; j++) {
    var max = results.length;
    for (let i = 0; i <= max; i++) {
      if (results[i] !== undefined) {
        results.push(results[i] + lettersArr[j]);
      } else {
        results.push(lettersArr[j]);
      }
    }
  }
  return results;
};

console.log(powerSet('jump'));