/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var count = 0;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var tuples = storage[index];
      var keyPos;
      for (var i = 0; i < tuples.length; i++) {
        if (tuples[i][0] === key) {
          keyPos = i;
          break;
        }
      }
      if (keyPos !== undefined) {
        tuples[keyPos][1] = value;
      } else {
        tuples.push([key, value]);
      }
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key);
    var tuples = storage[index];
    if (tuples !== undefined) {
      for (var i = 0; i < tuples.length; i++) {
        if (tuples[i][0] === key) {
          return tuples[i][1];
        }
      }
    }
    return undefined;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key);
    var tuples = storage[index];
    if (tuples !== undefined) {
      var removeInd;
      for (var i = 0; i < tuples.length; i++) {
        if (tuples[i][0] === key) {
          removeInd = i;
          break;
        }
      }
      tuples.splice(removeInd, 1);
    }
  };

  result.resize = function() {
  }

  return result;
};
