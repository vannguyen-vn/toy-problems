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
  var options = string.split('');
  var results = [];
  var recursiveFunction  = function (string) {
    if (string.length === options.length) {
      results.push(string);
    } else {
      options.forEach(function (letter) {
        if (string.indexOf(letter) === -1) {
          recursiveFunction(string + letter);
        }
      });
    }
  }
  options.forEach(function (letter) {
    recursiveFunction(letter);
  });
  return results;
};
