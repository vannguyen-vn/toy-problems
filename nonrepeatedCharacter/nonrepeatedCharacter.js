/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  // TODO: your solution here
  // split string into array of letters
  let letters = string.split('')
  // delcare counter obj
  let countObj = {}
  // iterate
  for (let i = 0; i < letters.length; i++) {
    // if current element is undefined
    if (countObj[letters[i]] === undefined) {
      // set value equal to 1 in obj
      countObj[letters[i]] = 1;
      // otherwise increment obj counter
    } else {
      countObj[letters[i]]++
    }
  }
  // iterate over obj
  for (let letter in countObj) {
    // if counter = 1
    if (countObj[letter] === 1) {
      // return the key
      return letter;
    }
  }
};

console.log(firstNonRepeatedCharacter('ABA')) // => 'B')