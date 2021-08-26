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

  var helper = function(currentString, temp) {
    temp = temp || '';
    if (temp.length === string.length) {
      result.push(temp);
      return;
    }
    for (var i = 0; i < currentString.length; i++) {
      temp += currentString[i];
      helper(currentString.slice(0, i) + currentString.slice(i + 1), temp);
      temp = temp.slice(0, temp.length - 1);
    }
  };

  helper(string);

  return result;
};



