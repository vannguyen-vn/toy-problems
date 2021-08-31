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
  var arr = str.split("").sort();
  var res = [];
  var ind = 0;

  var search = function(array, value, ind) {

    var cur = array[ind];

    for (var i = ind + 1; i < array.length; i++) {
      res.push(cur.concat(array[i]));
    }

    while (ind < array.length) {
      search(array, cur.concat(ind + 1), ind + 1);
      ind++;
    }
  }

  search(arr, "", 0);

  return res;
};
