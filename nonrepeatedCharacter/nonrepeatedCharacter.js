/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

/*
create hash map
key: letter
value: frequency of the letter
loop through string
  count frequency

loop through hash map
  check which key is first mapped to 1
  return the character at that key


*/


var firstNonRepeatedCharacter = function (string) {
  const map = new Map();
  for (var i = 0; i < string.length; i++) {
    if (map.has(string[i])) {
      map.set(string[i], (map.get(string[i]) + 1));
    } else {
      map.set(string[i], 1);
    }
  }

  for (var [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }

  return null;
};
