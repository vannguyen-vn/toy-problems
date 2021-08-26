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
  // create a results array
  const list = [];
  // split string into an array
  const letters = string.split('');
  // create anagram variable
  const anagram = '';
  // create recursive function
  const anagramCreator = (anagram) => {
    // base case
    // if anagram.length === string.length, push anagram to results array, return
    if (anagram.length === string.length) { list.push(anagram); return; }
    // iterate over the string array
    for (let i = 0; i < letters.length; i++) {
      // call recursion with anagram + stringarray[i]
      if (anagram.indexOf(letters[i]) !== -1) {
        continue;
      } else {
        anagramCreator(anagram + letters[i]);
      }
    }
  }
  // call recursive function with anagram varaiable
  anagramCreator(anagram);
  // return results array
  // _.uniq(list);
  return list;
};