/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var lowerString = string.toLowerCase();
  // Create a counter object
  var counterObj = {};
  // Iterate over the input string
  for (var i = 0; i < lowerString.length; i++) {
  // For every letter check if it exists in the obj
    if (counterObj[lowerString[i]] = counterObj[lowerString[i]]) {
      // If so
      // Increment value by one
      counterObj[lowerString[i]]++;
      console.log(counterObj);
       // Otherwise
    } else {
      // Initiate value at key to 1
      counterObj[lowerString[i]] = 1;
      console.log(counterObj);
    }
  }
  // Check object values
  for (key in counterObj) {
    // return key with value of 1
    if (counterObj[key] === 1) {
      return key;
    }
  }
};
