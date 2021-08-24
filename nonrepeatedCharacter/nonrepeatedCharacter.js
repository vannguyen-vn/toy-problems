/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var result = {};
  for (var i = 0; i < string.length; i++) {
    if (result[string[i]] === undefined) {
      result[string[i]] = i;
    } else {
      delete result[string[i]];
    }

    if (i === string.length - 1 && Object.keys(result).length === 0) {
      return null;
    }
  }

  var min = +Infinity;
  var arr = Object.values(result);

  for (var j = 0; j < arr.length; j++) {
    if (arr[j] < min) {
      min = arr[j];
    }
  }

  return string[min];
};
