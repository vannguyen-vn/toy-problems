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

  var getPowerSet = (string, letters, index = 0) => {
    for (var i = index; i < letters.length; i++) {
      var set = string + letters[i];
      if(subsetsMemo[letters[i]]) {

      } else {
        output.push(set);
      }

    }
  }
  getPowerSet('', letters);
  getPowerSet(letters[0], letters.slice(1));
return output;




  // var subsets = [];
  // subsets.push('');
  // var subsetFinder = (string) => {
  //   // subsets.push(...letter)
  //   // var string = letter;
  //   letters.forEach((letter, index) => {
  //     letters.splice(index, 1);
  //     string += letter;
  //     subsets.push(string)
  //     string = string.slice(0, string.length - 1);
  //     letters.splice(index, 0, letter);
  //   });
  //   if (letters.length > 0) {
  //     subsetFinder(string + letters.splice(0, 1));
  //   }
  // }
  // for (var i = 1; i <= str.length; i++) {
  //   var letters = str.split('');
  //   var letter = letters.splice(0, i)[i-1];
  //   console.log(letter);
  //   subsets.push(...letter)
  //   subsetFinder(...letter);
  // }
  // return subsets;
};
console.log(powerSet('bicycle'))
module.exports = powerSet;