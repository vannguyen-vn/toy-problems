/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var results = {};

  for (var i = 0; i < string.length; i++) {
    var character = string[i];
    if (results[character] === undefined) {
      results[character] = 1;
    } else {
      results[character] += 1;
    }
  }
  for (var key in results) {
    if (results[key] === 1) {
      return key;
    }
  }
  // return results;
};

console.log(firstNonRepeatedCharacter('AACBDBa'));