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
  // TODO: Your code here!
  // using string1 iterate through each character and check if it exists in string2
  let results = {};
  let commonString = '';

  for (var i = 0; i < string1; i++) {
    for (var j = 0; j < string2; j++) {
      if (string1[i] === string2[j] && results[string1[i]] === undefined) {
        console.log(string1[i]);
        results[string1[i]] = true;
      }
    }
  }
  for (var char in results) {
    commonString = commonString + char;
  }
  return commonString;
};


console.log(commonCharacters('acexivou', 'aegihobu'));