/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var uniques = new Set();
  var deleted = new Set();

  for (var i = 0; i < string.length; i++) {
    let ch = string[i];
    if (deleted.has(ch)) { continue; }
    if (uniques.has(ch)) {
      uniques.delete(ch);
      deleted.add(ch);
      continue;
    }
    uniques.add(ch);
  }

  return uniques.values().next().value;
};
