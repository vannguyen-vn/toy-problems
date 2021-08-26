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

/*
input : string
output: array (anagrams of a string)
*/

var allAnagrams = function(string) {
  var anaOutPut = {};
  var helper = function (anaSofar, str) {
    if (str === '') {
      anaOutPut[anaSofar] = true;
      return;
    }
   for ( var i = 0; i < str.length; i++) {
    helper(anaSofar + str[i], str.slice(0,i) + str.slice(i+1));
   }
  }

  helper('', string);
  return Object.keys(anaOutPut);
};
