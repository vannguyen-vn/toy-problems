/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function(string) {
  var container = [];
  var obj = {};

  for (var i = 0; i < string.length; i++) {
    if (obj[string[i]] === undefined) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }

  for (key in obj) {
    if (obj[key] === 1) {
      container.push(key);
    }
  }

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < container.length; j++) {
      if (string[i] === container[j]) {
        return container[j];
      }
    }
  }
};