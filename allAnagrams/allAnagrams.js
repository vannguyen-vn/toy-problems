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
  var result = [];

  var getAnagram = function(string, anagram) {
    anagram = anagram || '';

    if (!string) {
      result.push(anagram);
    }

    for (var i = 0; i < string.length; i++) {
      anagram = string[i];
      getAnagram(string.splice(0, i) + string.splice(i+1), anagram);
      anagram = anagram.slice(0, anagram.length - 1);
    }
  }
  getAnagram(string);

  return result;
};
