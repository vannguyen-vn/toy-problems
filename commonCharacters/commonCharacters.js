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
  // Solution that retains order letters appear in
  var commonLetters = new Set(string1);
  commonLetters.delete(' ');
  for (var i = 1; i < arguments.length; i++) {
    commonLetters.forEach((letter) => {
      var reg = new RegExp(`${letter}`, 'i');
      if (!reg.test(arguments[i])) {
        commonLetters.delete(letter);
      }
    })
  }
  commonLetters = [...commonLetters].join('');
  return commonLetters;

  //regex solution

  // var reg = new RegExp(`[${string1}]`, 'g');
  // var commonLetters = '';
  // for(var i = 1; i < arguments.length; i++) {
  //   commonLetters = arguments[i].match(reg);
  //   commonLetters = commonLetters.filter(letter => letter !== ' ');
  //   commonLetters = [...new Set(commonLetters)];
  //   commonLetters = commonLetters.join('');
  //   reg = new RegExp(`[${commonLetters}]`, 'g');
  // }
  // return commonLetters;

  // Time optimize solution

  // var commonLetters = {};
  // var stringObj = {};
  // for (var i = 0; i < string1.length; i++) {
  //   if (string1[i] !== ' ') {
  //     stringObj[string1[i]] = true;
  //   }
  // }
  // var checkString = (string) => {
  //   for (var i = 0; i < string.length; i++) {
  //     if (string[i] !== ' ') {
  //       if (stringObj[string[i]]) {
  //         commonLetters[string[i]] = true;
  //       }
  //     }
  //   }
  // }
  // for (var i = 1; i < arguments.length; i++) {
  //   checkString(arguments[i]);
  //   stringObj = commonLetters;
  //   commonLetters = {};
  // }
  // return Object.keys(stringObj).join('');
};

// module.exports = commonCharacters;