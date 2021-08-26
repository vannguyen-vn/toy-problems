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

var allAnagrams = (string, anagram = '') => {
  // Your code here.
  var results = [];

  if (!length) {
    results.push(anagram);
    return;
  }

  for (var i = 0; i < string.length; i++) {
    anagram += string[i];
    anagramGenerator(string.slice(0, i) + string.slice(i + 1));
    anagram.slice(0, anagram.length - 1);
  }

  return results;
};
