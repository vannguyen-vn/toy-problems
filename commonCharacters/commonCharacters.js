/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // Initialize a result string
  var result = '';
  // Initialize a temp string
  var temp = '';
  // Create object for string1
  var obj = {};
  // Iterate over the string1
  for (var i = 0; i < string1.length; i++) {
    // For each letter place in an object
    if (string1[i] !== obj[string1[i]]) {
      obj[string1[i]] = 1;
    } else {
      obj[string1[i]] += 1;
    }
  }
  // Iterate over string2
  for (var j = 0; j < string2.length; j++) {
    if (obj.hasOwnProperty(string2[j])) {
      // If it is, push into temp string
      temp += string2[j];
    }
    // Iterate over temp
  }
  for (var k = 0; k < temp.length; k++) {
    // Check that index of matches index of string1
    if (temp.indexOf(k) === string1.indexOf(k)){
      // If so, push into result
      result += temp[k];
    }
  }
  return result;
};
