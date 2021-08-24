/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  // iterate across, at each letter:
    // iterate, looking for a match
    //  if there's a match, splice it AND THE MATCH away?
  // OR...
  //
  for (var i = 0; i < string.length; i ++) {
    var repeated = false;
    for (var j = i + 1; j < string.length; j++) {
      if (string[j] === string[i]) {
        repeated = true;
      }
    }
    if (!repeated) {
      return string[i];
    }
  }
};
