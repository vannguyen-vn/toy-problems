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
  var anagrams = {};

  var inner = (word, subword) => {
    if (word.length === string.length) {
      if (!anagrams[word]) {
        anagrams[word] = word;
      }
      return;
    }

    for (var i = 0; i < subword.length; i++) {
      var temp = subword;
      subword = subword.slice(0, i) + subword.slice (i + 1, subword.length);
      inner(word + temp[i], subword);
      subword = temp;
    }
  };

  inner('', string);
  return Object.keys(anagrams);
};