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
  if (string.length === 1) return [string];
  let results = new Set();
  let set = new Set();
  anagramHelper(string, results, '', set);
  let newArray = Array.from(results);
  return newArray;
};

function anagramHelper(string, result, currentString, set) {
  if (currentString.length === string.length) result.add(currentString);
  for (let i = 0; i < string.length; i++) {
    if (set.has(i)) continue;
    currentString += string[i];
    set.add(i);
    anagramHelper(string, result, currentString, set);
    currentString = currentString.slice(0, -1);
    set.delete(i);
  }
}

// var anagrams = allAnagrams('abc');
// console.log(anagrams);