/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  const characters = string.toLowerCase().split('').sort();
  let result = [];
  let currChar = '';
  let currCount = 0;
  for (let i = 0; i < characters.length; i++) {
    if (i === 0) {
      currChar = characters[i];
      currCount++;
    } else if (characters[i] === currChar) {
      currCount++;
    } else {
      result.push([currChar, currCount]);
      currChar = characters[i];
      currCount = 1;
    }
    if (i === characters.length - 1) {
      result.push([currChar, currCount]);
    }
  }
  result.sort(function compare(a, b) {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    } else {
      return 0;
    }
  })
  return result;
};