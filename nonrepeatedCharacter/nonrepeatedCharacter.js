/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function(string) {
  var storage = {};

  for (var i = 0; i < string.length; i++) {
    (!storage[string[i]]) ? storage[string[i]] = 1 : storage[string[i]]++;
  }

  for (var j = 0; j < string.length; j++) {
    for (var key in storage) {
      if (storage[key] === 1 && key === string[j]) {
        return key;
      }
    }
  }
};

