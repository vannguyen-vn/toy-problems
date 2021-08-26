/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
   var anagrams = allAnagrams('abc');
  console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

/*
if string length == 1
  return string

make results []
call helper function with string, results, empty string, index
return results

helper function
base case: if current length equals string length
  push into results array

for loop through string
  add ith element in string to current
  recursive call helper function, increment index
  remove last character from current
*/

var allAnagrams = function (string) {
  // Your code here.
  if (string.length === 1) {
    return [string];
  }

  const set = new Set();
  const results = new Set();
  helper(string, results, "", set);

  const array = Array.from(results);
  return array;
};

var helper = function (string, results, current, set) {
  if (current.length === string.length) {
    results.add(current);
  }

  for (var i = 0; i < string.length; i++) {
    if (set.has(i)) {
      continue;
    }
    set.add(i);
    current += string[i];
    helper(string, results, current, set);
    set.delete(i);
    current = current.slice(0, -1);
  }
}
