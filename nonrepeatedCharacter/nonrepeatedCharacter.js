/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  let dictionary = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in dictionary) {
      dictionary[string[i]] += 1;
    } else {
      dictionary[string[i]] = 1;
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (dictionary[string[i]] === 1) {
      return string[i];
    }
  }
  return null;
};
