/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

const firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  const countObj = {};
  for (let i = 0; i < string.length; i++) {
    countObj[string[i]] === undefined ? countObj[string[i]] =1 : countObj[string[i]]++;
  }

  for (var key in countObj) {
    if (countObj[key] === 1) {
      return key;
    }
  }
};