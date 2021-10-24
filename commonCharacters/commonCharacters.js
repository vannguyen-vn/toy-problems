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

// DONE

var commonCharacters = function(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') return null;
  let commonChar = '';
  string1.split('').forEach((letter) => {
    if (letter === ' ') return;
    if (string2.indexOf(letter) !== -1 && commonChar.indexOf(letter) === -1) {
      commonChar += letter;
    }
  })
  return commonChar;
};
