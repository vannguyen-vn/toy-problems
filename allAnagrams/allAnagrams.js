/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  // declare result array
  var result = [];

  // iterate over array i = 1
  for (var i = 0; i < string.length; i++) {
    // declare a char var
    var char = string[i];
    // iterate again j = 0
    // declare temp variable
    // swap the characters
    // push to result array
  }

  // return result
  return result;
};
