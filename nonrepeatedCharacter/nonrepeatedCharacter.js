/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  /*

  I: string
  O: char / string
  C: none
  E: empty string or no answer is found

  object to store each character

  //split string into array

  iterate through string

  slice string starting from character + 1 and check for character occurring again using indexOf

    if found return value

  if loop finished return null

  */

  var stringArray = string.split('');
  var obj = {};

  for (var i = 0; i < stringArray.length; i++) {
    if (!obj[stringArray[i]]) {
      obj[stringArray[i]] = 1;
    } else {
      obj[stringArray[i]]++;
    }
    if (stringArray.slice(i + 1).indexOf(stringArray[i]) === -1 && obj[stringArray[i]] === 1) {
      return stringArray[i];
    }
  }

  return null;

  /*

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray.slice(i + 1).indexOf(stringArray[i] === -1)) {
      return stringArray[i];
    }
  }
  */

};
