/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var letterCount = {};
  for (var i = 0; i < string.length; i++) {
    if (letterCount[string[i]]) {
      letterCount[string[i]] = letterCount[string[i]] + 1;
    } else {
      letterCount[string[i]] = 1;
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (letterCount[string[j]] === 1) {
      return string[j];
    }
  }
};

// console.log(firstNonRepeatedCharacter('AACBDBEDC'));