var firstNonRepeatedCharacter = function(string) {
  var charStorage = {};
  var nonRepeatedChars = [];
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (!charStorage[char]) {
      charStorage[char] = 1;
    } else {
      charStorage[char]++;
    }
  }
  for (var key in charStorage) {
    if (charStorage[key] === 1) {
      nonRepeatedChars.push(key);
    }
  }
  var smallestIndex = nonRepeatedChars[0]
  for (var i = 0; i < nonRepeatedChars.length; i++) {
    if (string.indexOf(nonRepeatedChars[i]) < string.indexOf(smallestIndex)) {
      smallestIndex = nonRepeatedChars[i];
    }
  }
  return smallestIndex;
};