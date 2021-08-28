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

// input: string
// output: array of all combinations
// constraints:
// edge cases:
var powerSet = function(str) {
  // base case: empty str
  if (str.length === 0) {
    // return an array with an empty str
    return ['']
  }

  var nextLetter = str[0]

  var set = powerSet(str.slice(1))
  return set.concat(set.map(currentWord => nextLetter + currentWord)).sort()

};

powerSet("abc")
//-> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]

powerSet("jump")
//-> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]