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
  var results = [];

  var generateAnagrams = (currStr, anagram) => {
    anagram = anagram || '';
    if (anagram.length === string.length) {
      results.push(anagram);
      return;
    }
    for (var i = 0; i < currStr.length; i++) {
      anagram+= currStr[i];
      generateAnagrams(currStr.slice(0, i) + currStr.slice(i+1), anagram);
      anagram = anagram.slice(0, anagram.length - 1);
    }
  }
  generateAnagrams(string);

  return Array.from(new Set(results));
};
