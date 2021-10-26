/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  if (string.length === 0) {
    return null;
  }
  var result = [0, 0];
  var length = 1;
  var prev = string[0];
  var prevInd = 0;
  for (var i = 1; i < string.length; i++) {
    var cur = string[i];
    if (cur !== prev) {
      if (i - prevInd > length) {
        length = i - prevInd;
        result[0] = prevInd;
        result[1] = i - 1;
      }
        prev = cur;
        prevInd = i;
    }
  }
  return result;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
