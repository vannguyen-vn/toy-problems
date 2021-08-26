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
  if (string.length === 1) {
    return [string];
  } else {
    var result = [];
    for (var i = 0; i < string.length; i++) {
      var letter = string[i];
      var shorter = string.substr(0, i) + string.substr(i + 1, string.length - 1);
      console.log('first part :', string.substr(0, i));
      console.log('second part :', string.substr(i + 1, string.length - 1));
      var shorter = allAnagrams(shorter);
      for (var j = 0; j < shorter.length; j++) {
        result.push(letter + shorter[j]);
      }
    }
    return result;
  }
};
