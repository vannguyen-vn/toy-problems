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

/*
Input: str;
Output: array (all possible subsets including the empty set with all sorted characters)

 */
function powerSet(str) {
  let result = []

  function recursion(subSet, index) {
    if (index >= str.length) {
      result.push(subSet)
      return
    }
    recursion(subSet, index + 1)
    recursion(subSet + str[index], index + 1)
  }

  recursion("", 0)
  return result.sort();
}