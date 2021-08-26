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
  var permutations = [];
  var recursiveFunc = (currentPerm, remaining) => {
    if (remaining.length === 0) {
      permutations.push(currentPerm);
      return;
    }

    for (var i = 0; i < remaining.length; i++) {
      currentString = currentPerm + remaining[i];
      recursiveFunc(currentString, remaining.substring(0, i) + remaining.substring(i + 1));
    }


  }
  recursiveFunc('', string);
  return permutations;

};
