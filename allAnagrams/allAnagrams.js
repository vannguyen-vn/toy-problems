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
  var anagrams = [];
  for (var i = 0; i < string.length; i ++) {
    for (var n = 0; n < string.length; n++) {
      anagrams.push(string[0]);
    }
    var remainingString = string.slice(i + 1);
    var anagramsToAdd = allAnagrams(remainingString);
    for (var j = 1; j < string.length; j++) {
      anagrams[j] += anagramsToAdd[j];
    }
  }

  return anagrams;

  // var anagramBuilder = function(string, anagram);
  // for (var i = 0; i < string.length; i++) {
  //   var newAnagram = string[i]
  //   var remainingString = string.slice(i + 1);
  // }

  //base
  // end of letters (anagram.length === string.length)
  //   that's the anagram: return it/push it into the result array


  //recursive case
  //  iterate across
  //    start a string with each letter, push into an array (as many as length of string - 1)
  //    iterate across that array
  //      continue each string with each successive letter

};
