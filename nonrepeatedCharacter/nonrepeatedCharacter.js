/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var letters = {};
  for (var i = 0; i < string.length; i++) {
    if (!letters.hasOwnProperty(string[i])) {
      if (string.indexOf(string[i], i + 1) === -1 ) {
        return string[i];
      } else {
        letters[string[i]] = true;
      }
    }
  }
};
