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

 var allAnagrams = function(input) {
   // Storage for anagrams
  var results = {};
  var counter = 1;
  //var anagram = '';

  // Recursive anagram function
  var getAnagrams = (string, anagram = '') => {
    // Base Case
    // If string is empty (all used up) push anagram into results
    if (!string) {
      results[anagram] = counter++;
      return;
    }
    // Iterate over entire string
    for (var i = 0; i < string.length; i++) {
      // add position i to our anagram
      anagram += string[i];
      // Recursively call on string without i
      getAnagrams(string.slice(0, i) + string.slice(i + 1), anagram);
      // Remove last letter of anagram
      anagram = anagram.slice(0, anagram.length -1);
    }
  }
  // Call recursive function on input
  getAnagrams(input);
  // Return results
  return Object.getOwnPropertyNames(results);
};

// var test = allAnagrams('ABC');

// console.log(test);