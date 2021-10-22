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


/*
create result array

create hash map
populate hash map with key as character and value as frequency

loop through hash map
  push array of character and frequency into results array

sort result
descending order by frequency
ascending order by character

return result
*/


// var characterFrequency = function (string) {
//   var result = [];
//   var map = {};

//   for (var i = 0; i < string.length; i++) {
//     var current = string[i];
//     if (current in map) {
//       map[current]++;
//     } else {
//       map[current] = 1;
//     }
//   }
//   for (let letter in map) {
//     result.push([letter, map[letter]]);
//   }

//   // for (var j = 0; j < map.length; j++) {
//   //   var addArray = [Object.keys(map)[i], map[i]];
//   //   result.push(addArray);
//   // }

//   result.sort((a, b) => b[1] - a[1]);
//   result.sort(function (a, b) {
//     if (a[1] === b[1] && a[0] > b[0]) {
//       return 1;
//     }
//   });

//   return result;
// };


var characterFrequency = function (string) {
  var result = [];
  var map = new Map();

  for (var i = 0; i < string.length; i++) {
    if (map.has(string[i])) {
      map.set(string[i], map.get(string[i]) + 1);
    } else {
      map.set(string[i], 1);
    }
  }

  for (const [key, value] of map.entries()) {
    result.push([key, value]);
  }

  result.sort((a, b) => b[1] - a[1]);
  result.sort(function (a, b) {
    if (a[1] === b[1] && a[0] > b[0]) {
      return 1;
    }
  });

  return result;
};