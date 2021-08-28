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

  var array = str.split('');
  var subset = new Array(str.length);
  var powerSet = [];

  var genSubset = function(array, subset, i) {
    if (i === array.length) {
      // console.log(subset);
      powerSet.push(subset.join(''));
    } else {
      //path 1
      subset[i] = null;
      genSubset(array, subset, i+1)
      //path 2
      subset[i] = array[i];
      genSubset(array, subset, i+1)
    }
  }
  genSubset(array, subset, 0);

  return powerSet;

};

// console.log(powerSet('jump'))