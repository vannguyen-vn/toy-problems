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
var commonCharacters = function (string1, string2) {
  // create obj
  var inCommon = ''
  var unique1 = uniques(string1)

  for (var j = 1; j < arguments.length; j++) {
    var contained = stringToObj(arguments[j])

    for (var i = 0; i < unique1.length; i++) {
      var letter = unique1[i]
      if (contained[letter]) {
        inCommon += letter
      }
    }
    unique1 = inCommon
    inCommon = ''
  }

  return unique1
};

var uniques = function (string) {
  var seen = {}
  var uniqueString = ''
  var uniqueLetters = new Set(string.split(''))
  uniqueString = Array.from(uniqueLetters).join('')
  return uniqueString
}

var stringToObj = function (string) {
  var containsLetters = {}

  for (var i = 0; i < string.length; i++) {
    var letter = string[i]
    containsLetters[letter] = true;
  }

  return containsLetters
}

// //Example:
// console.log(commonCharacters('acexivou', 'aegihobu') === 'aeiou' ) // Returns: 'aeiou'
// console.log(commonCharacters('zyx', 'xzy' ) === 'zyx' )// zyx
// // need to implement more than two words, use arguments array?
// console.log(commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui', 'tyuiop', 'yuiopa' ) === 'y' )// 'y'
// console.log(commonCharacters('zyxxxxx', 'xzy' ) === 'zyx' )