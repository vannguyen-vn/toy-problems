/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === i && string.indexOf(string[i], i + 1) === -1) {
      return string[i]
    }
  }
};

// console.log(firstNonRepeatedCharacter('ABA')); // B
// console.log(firstNonRepeatedCharacter('AACCBDB')); // D