/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

/*
input: string
output: the char( the first nonrepeated char)

Pseudocode
- Go though the string
  - create var char to store the value of string[i]
  - if the index the curr character and index the next character = -1
  - return curr character
return null

 */

var firstNonRepeatedCharacter = function(string) {
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (string.indexOf(char) && string.indexOf(char, i+1) === -1) {
      return char;
    }
  }
  return null;
};

