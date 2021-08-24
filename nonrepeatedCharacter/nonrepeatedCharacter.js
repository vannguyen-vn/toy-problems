/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var stringArr = string.split('');
  var storage = {};
  for (var i = 0; i < stringArr.length; i++) {
    if (storage[stringArr[i]] === undefined) {
      storage[stringArr[i]] = 1;
    } else {
      storage[stringArr[i]]++;
    }
  }
  for (var i = 0; i < stringArr.length; i++) {
    if (storage[stringArr[i]] === 1) {
      return stringArr[i];
    }
  }
};
