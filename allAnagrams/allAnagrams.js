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

  var anagrams = new Set();
  var stringArray = string.split('');
  var iterations = string.length;
  var count = 100000;

  var strings = '';
  while (count > 0) {

    var rIndex = Math.floor(Math.random() * stringArray.length);
    strings += stringArray[rIndex];
    stringArray.splice(rIndex, 1)

    if (strings.length === string.length) {
      anagrams.add(strings);
      strings = '';
      count--;
      stringArray = string.split('');
    }
  }



  return Array.from(anagrams);
};

