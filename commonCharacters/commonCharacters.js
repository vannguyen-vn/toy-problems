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



var commonCharacters = function() {
  var args = Array.prototype.slice.call(arguments);
  var result = "";
  // var result = {};
  // for (var i = 0; i < args[0].length; i++) {
  //   if (str2.indexOf(str1[i]) > -1) {
  //     if (result[str1[i]] === undefined) {
  //       result[str1[i]] = 1;
  //     } else {
  //       result[str1[i]]++;
  //     }
  //   }
  // }

  var helper = function (str, arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(str) > -1) {
        count++;
      }
    }
    if (count >= arr.length) {
      result += str;
    }
  }

  for (var i = 0; i < args[0].length; i++) {
    helper(args[0][i], args.slice(1));
  }

  // return Object.keys(result).join("");
  return result;
};
