/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc'); //['a', 'b', 'c']
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  var res = {};
  var arr = string.split("");
  var len = string.length;

  var addAnagrams = (letter, array, length) => {
    if (letter.length === length) {
      if (res[letter] === undefined) {
        res[letter] = 1;
      }
      return;
    }

    for (var i = 0; i < array.length; i++) {
      addAnagrams(letter + array[i], array.slice(0, i).concat(array.slice(i + 1, array.length)), length);
    }
  }

  addAnagrams("", arr, len);

  return Object.keys(res);
};
