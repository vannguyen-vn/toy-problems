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
  var anagrams = [];
  var anagramMaker = (string, anagram = '') => {
    if (string.length === 0) {
      if (!anagrams.includes(anagram)) {
        anagrams.push(anagram);
      }
    }
    var letters = string.split('');
    for (var i = 0; i < letters.length; i++) {
      var letter = letters.splice(i, 1);
      anagramMaker(letters.join(''), anagram + letter);
      letters.splice(i, 0, letter);
    }
  }
  anagramMaker(string);
  return anagrams;
};

//module.exports = {allAnagrams: allAnagrams};
