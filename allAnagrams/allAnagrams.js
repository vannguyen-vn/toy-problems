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
var allAnagrams = function (string, memo) {
  var memo = memo || {}
  if (memo[string]) {
    return memo[string]
  }
  var possibilities = []
  if (string.length === 0) {
    return []
  }
  // base case
  if (string.length === 1) {
    return [string]
  }

  for (var i = 0; i < string.length; i++) {
    var currentLetter = string[i]
    var nextLetters = string.slice(0, i) + string.slice(i + 1)
    var laterCombos = allAnagrams(nextLetters)
    for (var j = 0; j < laterCombos.length; j++) {
      var currentCombo = laterCombos[j]
      possibilities.push(currentLetter + currentCombo)
    }
  }
  possibilities = new Set(possibilities)
  possibilities = Array.from(possibilities)
  memo[string] = possibilities

  return possibilities
};

// example usage:
// var anagrams = allAnagrams('abc');
// console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]