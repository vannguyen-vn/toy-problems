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

  var makeAnagram = function(base, str) {
    for (var i = 0; i < str.length; i++) {
      var newBase = base + str[i]
      if (newBase.length === string.length) {
        if (!anagrams.includes(newBase)) {
          anagrams.push(newBase);
        } else {
          return;
        }
      } else {
        var stringWithoutThatLetter = str.slice(0, i) + str.slice(i + 1);
        makeAnagram(newBase, stringWithoutThatLetter);
      }
    }
  }

  makeAnagram('', string);

  return anagrams;

  // for (var i = 0; i < string.length; i ++) {
  //   // for (var n = 1; n < string.length; n++) {
  //   //   anagrams.push(string[i]);
  //   // }
  //   // var remainingString = string.slice(0, i) + string.slice(i + 1);
  //   // if (remainingString.length > 0) {
  //   //   var anagramsToAdd = allAnagrams(remainingString);
  //   //   for (var j = 0; j < string.length; j++) {
  //   //     anagrams[j] += anagramsToAdd[j];
  //   //   }

  //   // }
  //   var currentAnagram = string[i];
  //   var remainingString = string.slice(0, i) + string.slice(i + 1);
  //   if (remainingString.length === 1) {
  //     return [remainingString];
  //   }
  //   var anagramsToAdd = allAnagrams(remainingString);
  //   anagrams.concat(anagramsToAdd.map((anagram) => (string[i] + anagram)));
  // }

  // return anagrams;

  // var anagramBuilder = function(string, anagram);
  // for (var i = 0; i < string.length; i++) {
  //   var newAnagram = string[i]
  //   var remainingString = string.slice(i + 1);
  // }

  //base
  // remainingString is only one letter
  //  return an array with only that letter
  //recursive case
  //  iterate across
  //    start a string with each letter, push into an array (as many as length of string - 1)
  //    iterate across that array
  //      continue each string with each successive letter

};
