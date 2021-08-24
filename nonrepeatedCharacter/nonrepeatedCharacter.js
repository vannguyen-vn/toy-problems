/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  for (var i = 0; i < string.length; i++) {
    if (/[\\\*\+\.\']/.test(string[i])) {
      var regex = new RegExp(`\\${string[i]}`, 'ig');
    } else {
      var regex = new RegExp(`${string[i]}`, 'ig');
    }
    var letterMatches = string.match(regex);
    if (letterMatches.length === 1) {
      return string[i];
    }
  }
  return undefined;
};
//module.exports = { firstNonRepeatedCharacter: firstNonRepeatedCharacter };