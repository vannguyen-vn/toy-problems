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
      delete uniqueStorage[string[i]];
    } else {
      uniqueStorage[string[i]] = i;
    }
  }

  if (Object.keys(uniqueStorage).length === 0) { return null; }

  var minPosition = string.length;

  for (var k in uniqueStorage) {
    if (uniqueStorage[k] < minPosition) {
      minPosition = uniqueStorage[k];
    }
  }

  return string[minPosition];
};

// test

//console.log(firstNonRepeatedCharacter('ABA'));
//console.log(firstNonRepeatedCharacter('AACBDB'));
//console.log(firstNonRepeatedCharacter('AABBCC'));
//console.log(firstNonRepeatedCharacter(''));

