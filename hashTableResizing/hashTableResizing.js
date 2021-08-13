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

  result.insert = function(key, value) {
    var tuple = [];
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index].length === undefined) {
      storage[index] = tuple;
    }
    var found = false;

    for (var i = 0; i < storage.length; i++) {
      for (var j = 0; j < storage[i].length; j++) {
        if (storage[i][j][0] === key) {
          storage[i][j][1] = value;
          found = true;
        }
      }
    }

    if (found) {
      storage[index].push([key, value]);
    }


    size++;

    if (size > 0.75 * storageLimit) {
      var newStorage = [];
      var newStorageLimit = storageLimit * 2;
      var newTuple = []
      for (var i = 0; i < storage.length; i++) {
        for (var j = 0; j < storage[i].length; j++) {
          var newInd = getIndexBelowMaxForKey(storage[i][j][0], newStorageLimit);
          newTuple.push(storage[i][j]);
          newStorage[newIndex] = newTuple;
        }
      }
      storage = newStorage;
      storageLimit = newStorageLimit;
    }


  };

  result.retrieve = function(key) {
    for (var i = 0; i < storage.length; i++) {
      for (var j = 0; j < storage[i].length; j++) {
        if (storage[i][j][0] === key) {
          return storage[i][j][1];
        }
      }
    }
    return null;
  };

  result.remove = function(key) {
    for (var i = 0; i < storage.length; i++) {
      for (var j = 0; j < storage[i].length; j++) {
        if (storage[i][j][0] === key) {
          storage[i].splice(j, 1);
        }
      }
    }
    size--;

    if (size < 0.25 * storageLimit) {
      var newStorage = [];
      var newStorageLimit = storageLimit * 2;
      var newTuple = []
      for (var i = 0; i < storage.length; i++) {
        for (var j = 0; j < storage[i].length; j++) {
          var newInd = getIndexBelowMaxForKey(storage[i][j][0], newStorageLimit);
          newTuple.push(storage[i][j]);
          newStorage[newIndex] = newTuple;
        }
      }
      storage = newStorage;
      storageLimit = newStorageLimit;
    }
  };

  return result;
};
