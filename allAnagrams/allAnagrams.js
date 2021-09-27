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

  var innerFunc = (innerString, resultString) => {
    if (resultString.length === string.length) {
      result.push(resultString)
      return
    }
    for (var i = 0; i < innerString.length; i++) {
      innerFunc(innerString.slice(0, i) + innerString.slice(i + 1), resultString + innerString[i]);
    }
    return;
  }

  innerFunc(string, '');

  return result;
};

console.log(allAnagrams('abc'))