/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
// input string of characters
// output: the character that was repeated first


// one way to do it is to put characters in an object
// if they don't exist, give them a value of one
// if they do exist, return that character

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var charStorage = {};
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (!charStorage[char]) {
      charStorage[char] = 1;
    } else {
      return char;
    }
  }
};
