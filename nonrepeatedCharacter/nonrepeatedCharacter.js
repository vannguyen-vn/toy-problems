/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var charCounts = {};
  for (var i = 0; i < string.length; i++) {
    if (!charCounts[string[i]]) { charCounts[string[i]] = 0; }
    charCounts[string[i]]++;
  }
  for (var i = 0; i < string.length; i++) {
    if (charCounts[string[i]] === 1) {
      return string[i];
    }
  }
};
