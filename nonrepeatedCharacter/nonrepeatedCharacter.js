/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  //see indexOf a string
  //see lastIndexOf a string
  //if those index's are different then that character repeats;
  for (var i = 0; i < string.length; i++) {
    if ((string.indexOf(i) > -1) === (string.lastIndexOf(i) >-1)) {
      return string[i];
    } else {
      return ''
    }
  }
};