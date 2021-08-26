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

var allAnagrams = function (string) {
  // declare variable assign to obj
  var result = {};
  // base case: if word length is equal to string length anagram becomes true
  let makeAnagrams = (word, letters) => {
    if (word.length = letters.length) {
      result[word] = true;
    }
    for (let i = 0; i < letters.length; i++) {
      // iterate, current letter, 0 --> index, and next index
      makeAnagrams(word + letters[i], letters.slice(0, i), letters.slice(i + 1))
    }
  }
  // recursive function
  makeAnagrams('', string)
  // return anagrams


};
var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]