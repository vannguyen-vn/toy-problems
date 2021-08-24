/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  if (string === undefined) {
    return undefined;
  }
  let char = string[0];
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== char) {
      return string[i];
    }
  }
  return null;
};
