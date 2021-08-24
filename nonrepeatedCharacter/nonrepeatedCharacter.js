/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (string.indexOf(char) === i && string.indexOf(char, i + 1) ) {
      return char;
    }
  }
  return null;
};



