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

    var index = getIndexBelowMaxForKey(key, storageLimit)
    if (!storage[index]) {
      storage[index] = [];
      var bucket = storage[index];
      bucket.push([key, value]);
      size++
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        var pair = storage[index][i];
        if (pair[0] === key) {
          pair[1] = value;
        } else {
          storage[index].push([key, value]);
          size++
        }
      }
    }
    if (size > storageLimit*0.75) {
      resize(storage)
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit)
    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        return storage[index][i][1];
      }
    }
  };

  result.remove = function(key) {
    size--
    var index = getIndexBelowMaxForKey(key, storageLimit);
    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        storage[index][i].splice(i, 1)
      }
    }
    if (size < storageLimit*0.25) {
      resize(storage)
    }
  };

  result.resize = function(storage) {
    // create a temparary storage copy
    // if size > three fourths storage limit
      // double storageLimit
      // make storage an empty array
      // iterate over temp storage
        // if a bucket exists at an index
          // iterate over the bucket
          // put each key value pair from the bucket into the insert function
    // otherwise
      // cut the storage limit in half
      // made storage an empty array
      // iterate over temp storage
        // if a bucket exists at an index
          // iterate over the bucket
          // put each key value pair from the bucket into the insert function
    var tempStorage = storage.slice(0);
    if (size > storageLimit*0.75) {
      storageLimit = storageLimit * 2;
      storage = [];
      for (var i = 0; i < tempStorage.length; i++) {
        if (tempStorage[i]) {
          for (var j = 0; j < tempStorage[i].length; j++) {
            var keyValuePair = tempStorage[i][j];
            result.insert(keyValuePair[0], keyValuePair[1]);
          }
        }
      }
    } else {
      storageLimit = storageLimit / 2;
      storage = [];
      for (var i = 0; i < tempStorage.length; i++) {
        if (tempStorage[i]) {
          for (var j = 0; j < tempStorage[i].length; j++) {
            var keyValuePair = tempStorage[i][j];
            result.insert(keyValuePair[0], keyValuePair[1]);
          }
        }
      }
    }
  };

  return result;
};
