/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function(string) {

  if (string.length === 0) return null;

  var counts = {};
  for (var i = 0; i < string.length; i++) {
    if (!counts[string[i]]) {
      counts[string[i]] = 1;
    } else {
      counts[string[i]]++;
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (counts[string[i]] === 1) {
      return string[i];
    }
  }
  return null;

};

//two for loops, O(2n) --> O(n)

