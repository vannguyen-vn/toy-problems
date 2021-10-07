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
  var result = [''];

  var makeSets = function(set, index) {
    for (var j = index + 1; j < str.length; j++) {
      if (!set.includes(str[j])) {
        var newSet = set + str[j];
      } else {
        var newSet = set;
      }
      var setAsArray = newSet.split('');
      var sortedArray = setAsArray.sort();
      var sortedSet = sortedArray.join('');
      if (!result.includes(sortedSet)) {
        result.push(sortedSet);
      }
      if (sortedSet.length === str.length) {
        return;
      }
      makeSets(newSet, j);
    }
  }

  for (var i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result.push(str[i]);
    }
    makeSets(str[i], i);
  }

  return result;
};