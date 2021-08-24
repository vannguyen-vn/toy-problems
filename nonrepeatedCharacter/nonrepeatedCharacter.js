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
  for (var i = 0; i < string.length; i++) {
      // for each
      var char = string[i]
    // if not already a key in letterCounts
    if (letterCounts[char] === undefined) {
       // add it, with value 1
       letterCounts[char] = 1
    } else {// otherwise
      // increment value by 1
      letterCounts[char]++
    }
  }

    // loop through str again
    for (var j = 0; j < string.length; j++) {
      // for each
      var char = string[j]
      // if the object at that letter has a value of 1
      if (letterCounts[char] === 1) {
        // return
        return char
      }
    }
    return null
};

// Example:
var test1 = firstNonRepeatedCharacter('ABA'); // => 'B'
console.log(test1)
var test2 = firstNonRepeatedCharacter('AACBDB'); // => 'C'
console.log(test2)
var test3 = firstNonRepeatedCharacter(''); // => null
console.log(test3)
var test4 = firstNonRepeatedCharacter('AACBCDBD'); // => null
console.log(test4)