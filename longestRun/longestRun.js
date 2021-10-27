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

/*
[1, 3]
a b b b c c

a b
  b b
  b b b
        c c

check string is valid - null or length 0, return null
create return var result = [0,0]
create return var temp = [0,0]

iterate through string - starting from 1
  check if cur ith char is not equal to prev ith char
    check if temp diff is greater than result diff
      update result to be diff
    set temp to i, i
  else
    set temp[1] to i
return result
*/


var longestRun = function (string) {
  if (string === null || string.length === 0) {
    return null;
  }

  var result = [0, 0];
  var temp = [0, 0];

  for (var i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      if (temp[1] - temp[0] > result[1] - result[0]) {
        result = temp;
      }
      temp = [i, i];
    } else {
      temp[1] = i;
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
