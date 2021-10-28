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
  if (!string.length) {
    return null
  }
  const arr = string.toLowerCase().split('');
  let maxStart = 0;
  let maxCount = 1;
  let currStart = 0;
  let currCount = 1;
  let currChar = arr[0];
  for (let i = 1; i < string.length; i++) {
    if (arr[i] === currChar) {
      currCount++;
    } else {
      currChar = arr[i];
      currStart = i;
      currCount = 1;
    }
    if (currCount > maxCount) {
      maxCount = currCount;
      maxStart = currStart;
    }
  }
  return [maxStart, maxStart + maxCount - 1]
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
