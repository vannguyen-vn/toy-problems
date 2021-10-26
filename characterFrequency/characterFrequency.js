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
  var result = {};
  for (var i = 0; i < string.length; i++) {
      var cur = string[i];
    result[cur] === undefined ? result[cur] = 1 : result[cur]++;
  }
  var array1 = Object.keys(result).sort();
  var array2= [];
  for (var j = 0; j < array1.length; j++) {
    var subObj = {}
    subObj.key = array1[j];
    subObj.value = result[array1[j]];
    array2.push(subObj);
  }
  array2.sort((a, b) => {
    return b.value - a.value
  })
  var finalArr = [];
  for (var k = 0; k < array2.length; k++) {
    var subArr = [];
    subArr[0] = array2[k].key;
    subArr[1] = array2[k].value;
    finalArr.push(subArr);
  }
  return finalArr;
};