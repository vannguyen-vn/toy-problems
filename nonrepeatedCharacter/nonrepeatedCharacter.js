/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function(string) {
  var i = 0;
  while (i < string.length) {
    var char = string[i];
    if (string.indexOf(char) === i && string.indexOf(char, i + 1) === -1) {
      return char;
    }
    i++;
  };
 return null;
}
console.log(firstNonRepeatedCharacter('AARCIYRRRCBDB'));