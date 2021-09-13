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
  var letters = [...new Set(str)].join('');

  var subsetsMemo = {};
  var output = [''];
  var iterationTracker = 0;

  var getPowerSet = (letters, index = 0) => {
    if(iterationTracker === letters.length) {
      return;
    }
    var maxIndex = output.length;
    for (var j = index; j < maxIndex; j++) {
      for (var i = 0; i < letters.length; i++) {
        if(!new RegExp(letters[i]).test(output[j])) {
          var set = output[j] + letters[i];
          set = set.split('');
          set.sort();
          set = set.join('');
          if(!subsetsMemo[set]) {
            output.push(set);
            subsetsMemo[set] = true;
          }
        }
      }
    }
    iterationTracker ++;
    getPowerSet(letters, maxIndex)
  }
  getPowerSet(letters);
return output;
};
// module.exports = powerSet;