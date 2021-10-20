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
  // TODO: Your code here!
  if (string === '') {
    return null;
  }
  var pointer1 = string[0]
  var pointer1Index = 0
  var pointer2 = string[0]
  var pointer2Index = 0
  var length = 0
  var result;
  for (var i = 1; i < string.length; i++) {
    if (string[i] === pointer1) {
      pointer2 = string[i]
      pointer2Index = i
    } else {
      if (pointer2Index - pointer1Index + 1 > length) {
        length = pointer2Index - pointer1Index +1
        result = [pointer1Index, pointer2Index]
      }
      pointer1 = string[i]
      pointer1Index = i
      pointer2 = string[i]
      pointer2Index = i
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
