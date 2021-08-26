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

var allAnagrams = (string) => {
  // Your code here.
  var results = [];

  var anagramGenerator = (word, anagram = '') => {
    if (!word) {
      results.push(anagram);
      return;
    }
    for (var i = 0; i < word.length; i++) {
      anagram += word[i];
      anagramGenerator(word.slice(0, i) + word.slice(i + 1), anagram);
      anagram = anagram.slice(0, anagram.length - 1);
    }
  }

  anagramGenerator(string);
  return results;
};

// function genAnagram(word) {
//   var results = [];
//   if (word.length == 1) {
//     results.push(word);
//     return results;
//   }
//   for (var i = 0; i < word.length; i++){
//     var fixed = word[i];
//     var remaining = word.slice(0, i) + word.slice(i + 1);
//     var r = genAnagram(remaining);
//     for(var j = 0; j < r.length; j++ ){
//       results.push(fixed + r[j]);
//     }
//   }
//   return results;
// }

// var anagrams = genAnagram('abc');
// console.log(anagrams)