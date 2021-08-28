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

var powerSet = function (str) {
  var thePowerSet = new Set();

  function findPowerSet(word, index, subset) {
    if (index === word.length) { return; }

    thePowerSet.add(subset);

    for (var i = index + 1; i < word.length; i++) {
      subset += word[i];
      findPowerSet(word, i, subset);
      subset = subset.substring(0, subset.length - 1);
    }
  }

  findPowerSet(str, -1, '');

  return Array.from(thePowerSet);
};

