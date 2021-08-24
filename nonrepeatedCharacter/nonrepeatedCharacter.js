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
  // iterate across, at each letter;
  //  use slice up to and slice after to make "string without"
  //  iterate across string without to look for a match
  //  use repeated boolean as before

  for (var i = 0; i < string.length; i ++) {
    var repeated = false;
    var stringWithout = string.slice(0, i) + string.slice(i + 1, string.length);
    for (var j = 0; j < stringWithout.length; j++) {
      if (stringWithout[j] === string[i]) {
        repeated = true;
      }
    }
    if (!repeated) {
      return string[i];
    }
  }
};
