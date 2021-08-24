/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // Storage Object
  var results = {};
  // Iterate over entire array
  for (var i = 0; i < string.length; i++) {
    // If first set to 1
    if(results[string[i]] === undefined) {
      results[string[i]] = 1;
    }
    // Increment the counter in results
    else {
      results[string[i]]++;
    }
  }
  // Iterate over results object and return first value equal to 1
  for (var element in results) {
    if (results[element] === 1) {
      return element;
    }
  }
};

// var test1 = firstNonRepeatedCharacter('ABA'); // => 'B'
// var test2 = firstNonRepeatedCharacter('AACBDB'); // => 'C'

// console.log('Test 1: ' + test1);
// console.log('Test 2: ' + test2);