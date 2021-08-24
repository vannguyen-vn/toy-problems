/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  // declare first character
  var firstChar = string[0];
  // iterate over string
  for (var i = 0; i < string.length; i++) {
    // check if current is not equal to first
    if (string[i] !== firstChar) {
      // return letter
      return string[i];
      break;
    }
  }
  // return string has one letter
  return 'String has only one letter';
};
