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



var commonCharacters = function (string1, string2) {
  var str1 = {};
  var results = '';
  for (var i = 0; i < string1.length; i++) {
    str1[string1[i]] = false;
  }
  for (var j = 0; j < string2.length; j++) {
    if (str1[string2[j]] === false) {
      str1[string2[j]] = true;
    }
  }
  Object.keys(str1).forEach((key) => {
    if (str1[key]) {
      results = results + key;
    }
  });
  return results;

};

//// TESTING ////

// var test = commonCharacters('acexivou', 'aegihobu');
// console.log(test);
