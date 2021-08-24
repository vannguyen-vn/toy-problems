/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function(string) {
  string = string.toLowerCase();
  //question didn't specifiy casing

  var counts = {};
  for (var i = 0; i < string.length; i++) {
    if (!counts[string[i]]) {
      counts[string[i]] = 1;
    } else {
      counts[string[i]]++;
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (counts[string[i]] === 1) {
      return string[i];
    }
  }
  return -1;

};

//two for loops, O(2n) --> O(n)

