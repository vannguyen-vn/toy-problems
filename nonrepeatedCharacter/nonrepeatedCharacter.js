// Aug 28: complete

/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var uniqueStorage = {};

  for (var i = 0; i < string.length; i++){
    if(uniqueStorage.hasOwnProperty(string[i])) {
      uniqueStorage[string[i]].occurrence+= 1;
    } else {
      uniqueStorage[string[i]] = {occurrence: 1, index: i};
    }
  }

  if (Object.keys(uniqueStorage).length === 0) { return null; }

  var minPosition = null;

  for (var k in uniqueStorage) {
    if(uniqueStorage[k].occurrence === 1) {
      if (minPosition === null || uniqueStorage[k].index < minPosition) {
        minPosition = uniqueStorage[k].index;
      }
    }
  }

  if (minPosition === null) { return null; }

  return string[minPosition];
};

// test

//console.log(firstNonRepeatedCharacter('ABA'));
//console.log(firstNonRepeatedCharacter('AACBDB'));
//console.log(firstNonRepeatedCharacter('AAABBCC'));
//console.log(firstNonRepeatedCharacter(''));

