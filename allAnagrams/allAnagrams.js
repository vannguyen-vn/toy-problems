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
  if (string.length === 1) {
    results.push(string);
    return results;
  } else {
    for (var i = 0; i < string.length; i++) {
      var letter = string[0];
      var recursiveResults = allAnagrams(string.slice(1));
      for (var j = 0; j < recursiveResults.length; j++) {
        results.push( letter + recursiveResults[j] );
      }
      string = string.slice(1) + letter;
    }
  }
  return results;
};

var anagrams = allAnagrams('abcd');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
