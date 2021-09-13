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
  var obj = {};
  var result = '';
  for (var i = 0; i < string1.length; i++) {
    var currentElement = string1[i];
    if (currentElement === ' ') {
      continue;
    }
    obj[currentElement] = 1;
  }
  for (var i = 0; i < string2.length; i++) {
    var currentElement = string2[i];
    if (currentElement === ' ') {
      continue;
    }
    if (obj[currentElement]) {
      obj[currentElement]++;
    }
  }
  for (var key in obj) {
    if (obj[key] === 2) {
      result += key;
    }
  }
  return result;
};

