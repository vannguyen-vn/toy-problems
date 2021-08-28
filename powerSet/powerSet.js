/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

/*
declare result array
remove duplicates
  split, sort
  for loop
    check if str[i-1] == str[i]
      remove ith character
join string together
call back track helper function
return result

back track helper function
push empty string into array
for loop through string
  add current character
  call recursive function, increment index
  remove last character

*/

var powerSet = function (str) {
  var result = [];

  var stringArray = str.split('').sort();
  for (var i = 1; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i - 1]) {
      stringArray.splice(i, 1);
      i--;
    }
  }

  var joined = stringArray.join('');

  backtrack(result, joined, '', 0);
  return result;
};

var backtrack = function (result, string, current, index) {
  result.push(current);
  for (var i = index; i < string.length; i++) {
    current += string[i];
    backtrack(result, string, current, i + 1);
    current = current.slice(0, -1);
  }
}
