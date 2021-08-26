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
  // Declare a result array
  var results = [];
  var arr = string.split("");
  // Create inner recursive function that takes in a newString
  var recursiveFunc = function(newString) {
    // Base Case: If newString length equals string length
    if(newString.length === string.length) {
      // Push into results array
      results.push(newString);
        // Else
    } else {
      // Iterate over string
      for (var i = 0; i < arr.length; i++) {
        var currentLetter = arr[i];
        // splice the newString at the current index
        arr.splice(i, 1);
        // Call Recursive function on newString
        recursiveFunc(newString + currentLetter);
        arr.splice(i, 0, currentLetter);
      }
    }
  };
  // Call Recursive function on empty string
  recursiveFunc("");
  // Return results
  return results;
};
