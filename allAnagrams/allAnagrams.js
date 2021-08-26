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
  // Your code here.
  var len = string.length;
  var chars = string.split('');
  var str = '';
  var results = [];
  var innerFunc = function(str, chars) {
    if(str.length === len) {
      if(results.indexOf(str) === -1) {
        results.push(str);
      }
    } else {
      chars.forEach(function(char, index) {
        var newStr = str + char;
        var newChars = chars.slice();
        newChars.splice(index, 1);
        innerFunc(newStr, newChars);
      });
    }
  }
  innerFunc(str, chars);
  return results;
};
