// Aug 27 Attempted, not complete

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

 result = [];

 var dfs = function(stringOutput, letters) {
   if (letters.length === 0) {
     return result;
   }

   for (var i = 0; i < letters.length; i++) {
     result.push(stringOutput);
     return dfs(stringOutput.concat(letters[i]), letters.slice(1));
   }
 };
 for (var i = 0; i < str.length; i++) {
   dfs(str.slice(i, i+1), str().slice)
 }
 return result;
};
