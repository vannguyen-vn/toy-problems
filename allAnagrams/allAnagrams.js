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
  var result = [];

  var dfs = function(array) {
    var oneBranch = [];
    for (var i = 0; i < array.length; i++) {
      oneBranch = oneBranch.push(array[i]);
      array = array.splice(i, 1);
      dfs(array);
    }
    result.push(oneBranch.join(''));
  }
    return result;
};
