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
  // Variables
  var results = [];
  var string = str;

  // Recrusive function
  var ps = (string) => {
    var currString = '';
    //Base Case
    if () {

    }
    for (var i = 0; i < string.length; i++) {
      results.push(currString);
    }

  }

  // Return Results
  return results;
};


/*
ryan
'', 'r','y','a','n'
ry, ra, rn, yr, ya, yn, ar, ay, an, nr, ny, na

*/