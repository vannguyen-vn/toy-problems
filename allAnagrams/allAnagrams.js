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
  var anagrams = [];

  var makeAnagram = function(base, str) {
    for (var i = 0; i < str.length; i++) {
      var newBase = base + str[i]
      if (newBase.length === string.length) {
        // if (!anagrams.includes(newBase)) { // this test was causing it to timeout
        anagrams.push(newBase);
        // } else {
        //   return;
        // }
      } else {
        var stringWithoutThatLetter = str.slice(0, i) + str.slice(i + 1);
        makeAnagram(newBase, stringWithoutThatLetter);
      }
    }
  }


//   for (var k = 0; k < string.length; k++) {
//     var stringWithoutThatLetter = string.slice(0, k) + string.slice(k + 1);
//     makeAnagram(string[k], stringWithoutThatLetter);
//   }
  makeAnagram('', string);

  return anagrams;

  //This code almost works, but the time complexity becomes too much too quickly. 9 characters won't even return anything.
  //
  //push the string into the array
  //switch the last two chars
  //  if it's not in the array
  //    push that into the array
  //  else
  //  switch the next-to-last and the next-to-next-to-last
  // repeat until...?

  //original string             // 123456789
  //move the last one over one  // 123456798
  //move the last one over two  // 123456879
  //move the last one over one  // 123456897
  //move the last two over one  // 123456978
  //move the last one over one  // 123456987
  //move the // 123457689
  //  // 123457698
  //  //


};
