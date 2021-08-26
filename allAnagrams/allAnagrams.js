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
  if (string.length < 2) {
    return string;
  }
  let letterArray = [];
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
   let remaining = string.slice(0, i) + string.slice(i + 1, string.length);
  //  console.log(remaining);
  for (let nextLetter of allAnagrams(remaining)) {
    letterArray.push(letter + nextLetter);
  }
  }
  return letterArray;
};

console.log(allAnagrams('salmon'));