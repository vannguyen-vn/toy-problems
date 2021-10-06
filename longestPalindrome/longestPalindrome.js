/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var result = '';

  for (var i = 0; i < string.length; i++) {
    var current = string[i];
    var next;

    for (var j = i + 1; j < string.length; j++) {
      if (current === string[j]) {
        next = j;
        var subString = string.slice(i, next + 1);
        if (subString.length > result.length && subString.toLowerCase() === subString.split('').reverse().join('').toLowerCase()) {
          result = subString;
        }
      }
    }
  }

  return result;
};

// var longestPalindrome = function (string) {
//   var start = 0;
//   var end = 0;

//   for (var i = 0; i < string.length; i++) {
//     var even = palindrome(string, start, end);
//     var odd = palindrome(string, start, end + 1);

//     var temp = Math.max(even[1] - even[0], odd[1] - odd[0]);

//     if (temp > (end - start)) {
//       if (temp === (even[1] - even[0])) {
//         start = even[0];
//         end = even[1];
//       }
//     } else {
//       start = odd[0];
//       end = odd[1];
//     }
//   }

//   return string.substring(start, end + 1);
// };


// var palindrome = function (string, start, end) {
//   while (start >= 0 && end <= string.length - 1 && string[start] === string[end]) {
//     start--;
//     end++;
//   }

//   var res = [start + 1, end - 1];

//   return res;
// }