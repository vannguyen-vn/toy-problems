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

  var result = {};

  var innerFunction = (newString, constructor) => {

    if (newString.length === string.length) {
      result[newString] = true;
    }


    for (var i = 0; i < constructor.length; i++) {
      innerFunction(newString + constructor[i], constructor.slice(0, i) + constructor.slice(i + 1));
    }
  }
  innerFunction('', string);

  return Object.keys(result);
};