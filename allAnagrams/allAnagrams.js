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

var allAnagrams = function(string, anagram) {
  anagram = anagram || '';
  let res = [];

  if (string.length === 0) {
    return [ anagram ];
  }

  for (let i = 0; i < string.length; i++) {
    let subres = allAnagrams(string.slice(0, i) + string.slice(i + 1, string.length), anagram + string[i]);
    res.push(...subres);
  }

  var filterAnagrams = function(array) {
    let dictionary = {};
    let filtered = [];

    for (const anagram of array) {
      dictionary[anagram] = true;
    }

    for (let key in dictionary) {
      filtered.push(key);
    }

    return filtered;
  }

  return filterAnagrams(res);
};
