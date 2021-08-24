/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// input: string
// output: string - 1st char not repeated
// constraints: none
// edge cases: if all repeated, empty str - return empty str
var firstNonRepeatedCharacter = function(string) {
  var letterCounts = {}
  // loop through str
    // for each
    // if not already a key in letterCounts
      // add it, with value 1
    // otherwise
      // increment value by 1

    // loop through str again
      // for each
      // if the object at that letter has a value of 1
        // return
};

// Example:
var test1 = firstNonRepeatedCharacter('ABA'); // => 'B'
console.log(test1)
var test2 = firstNonRepeatedCharacter('AACBDB'); // => 'C'
console.log(test2)