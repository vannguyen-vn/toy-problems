/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var chars = string.split('');
  var uniqueChars = {};
  chars.forEach(function(char) {
    if (uniqueChars[char]) {
      uniqueChars[char]++;
    } else {
      uniqueChars[char] = 1;
    }
  })
  for (var i = 0; i < chars.length; i++) {
    if (uniqueChars[chars[i]] === 1) {
      return chars[i];
    }
  }
  return 'No nonrepeated character in the string!';
};
