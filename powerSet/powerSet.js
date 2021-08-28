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

     var obj = {}
     // We can take care of all duplicates here
     for(var i = 0; i < str.length; i++){
        obj[str[i]] = 1;
     }
      // By making an array with the obj keys, it will have no dups
     var array = Object.keys(obj);
     // we take care of the sort here
     array = array.sort();
     // set our results array to have an empty string my default to take care of empty set
     var result = [""];

     for(var k = 0; k < array.length; k++){
        var len = result.length;
        for(var j = 0; j < len; j++){
          result.push(result[j].concat(array[k]))
        }
     }
 return result;

 };
