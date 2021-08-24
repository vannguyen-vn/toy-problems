/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  if (string.length === 0) {
    return null;
  }

  var result = {};
  for (var i = 0; i < string.length; i++) {
    if (result[string[i]] === undefined) {
      result[string[i]] = 1;
    } else {
      result[string[i]]++;
    }
  }

  var min = +Infinity;
  var arr = Object.keys(result);

  for (var j = 0; j < arr.length; j++) {
    if (result[arr[j]] === 1 && string.indexOf(arr[j]) < min) {
      min = string.indexOf(arr[j]);
    }
  }

  if (min === +Infinity) {
    return null;
  }

  return string[min];
};
