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
  let results = ''
  let args = Array.prototype.slice.call(arguments);

  let helper = function (str, arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(str) > -1) counter++;
    }
    if (counter >= arr.length) results += str;
  }

  for (let i = 0; i < args[0].length; i++) {
    helper(args[0][i], args.slice(1));
  }

  return results;
};


// console.log(commonCharacters('acexivou', 'aegihobu')); //'aeiou'