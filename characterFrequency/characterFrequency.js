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
// build result array /////
// set result variable to empty array
  var result = [];
  var nested = [];
  var sorted = [];
// counter variable
  var counter;
// iterate along string
  // for each letter
    //if it's not in the result array
      //push it in, set counter value to 1
      //iterate across array from there
        //increase counter at each occurrence
      //push counter into result array
    //if it is
      //just move along
// divide the array into nested arrays of ordered pairs

  for (var i = 0; i < string.length; i++) {
    if (!result.includes(string[i])) {
      result.push(string[i]);
      counter = 1;
      for (var j = i + 1 ; j < string.length; j++) {
        if (string[j] === string[i]) {
          counter++;
        }
      }
      result.push(counter);
    }
  }

  for (var i = 0; i < result.length; i += 2) {
    nested.push(result.slice(i, i + 2));
  }

// sort result array
  nested.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1
    }
  });
  nested.sort((a, b) => (b[1] - a[1]));

  return nested;
};