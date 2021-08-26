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

// input: str
// output: array of str
// constraints: N/A (don't worry about repeated str)
// edge cases: if all same letter
var allAnagrams = function(string) {
  var possibilities = []
  var length = string.length

  if (length === 1) {
    return string
  }

  // loop through string chars
  for (var i = 0; i < string.length; i++) {
    // save first character to use later
    var firstChar = string[0]
    // use recursion, sending in a smaller string
    var shortened = allAnagrams(string.slice(1, length))
    // loop through the smaller string
    for (var j = 0; j < shortened.length; j++) {
      // add the original first char and the char at current index
      possibilities.push(firstChar + shortened[j])
      string = string.substr(1, length - 1) + firstChar
    }
  }

  return possibilities
};

// example usage:
var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
