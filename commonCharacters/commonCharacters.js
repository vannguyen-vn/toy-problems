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


// input: 2 strings
// output: string of common letters
// constraints: look for letters in order of appearance, skip spaces, no duplicates
// edge cases: N/A
var commonCharacters = function(string1, string2) {
  // create obj
  var inCommon = ''
  var letters = {}
  // loop through string1
  for (var i = 0; i < string1.length; i++) {
    // if letter doesn't exist in obj
    if (letters[string1[i]] === undefined) {
      // add it as a key with value false (for more than two strings could use an array)
      letters[string1[i]] = false
    }
  }

  // loop through string2
  for (var j = 0; j < string2.length; j++) {
     // if letter exists as a key
     if (letters[string2[j]] !== undefined) { // if more strings, could push true or false to the array for that letter depending on if it has the letter
       // add it to the return str
       inCommon += string2[j]
     }
  }
   return inCommon
};

//Example:
console.log( commonCharacters('acexivou', 'aegihobu') )
// Returns: 'aeiou'