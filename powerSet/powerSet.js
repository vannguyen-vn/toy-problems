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
  var results = [];

  if (str.length === 0) {
    results.push(str);
    return results;
  } else {
    var recursiveResults = powerSet(str.slice(1));
    results = results.concat(recursiveResults);
    var letter = str.slice(0, 1);
    for (var i = 0; i < recursiveResults.length; i++) {
      results.push(letter + recursiveResults[i]);
    }

    return results;
  }

};

console.log(powerSet('jump'));