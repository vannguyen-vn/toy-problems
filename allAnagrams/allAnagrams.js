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
      return;
    }

    for (var i = 0; i < string.length; i++) {
      anagram += string[i];

      if (string.indexOf(string[i]) != i) {
        continue;
      }

      getAnagram(string.slice(0, i) + string.slice(i+1), anagram);
      anagram = anagram.slice(0, anagram.length - 1);
    }
  }
  getAnagram(string);

  return result;
};
