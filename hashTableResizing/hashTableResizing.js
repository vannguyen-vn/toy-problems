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
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var tuple = [key, value];
    var collided = true;

    if (!storage[index]) {
      storage[index] = [];
    }

    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        storage[index][i] = tuple;
        return;
      }
    }

    storage[index].push(tuple);
    size++;

    if (size > (storageLimit * .75)) {
      result.resize(storageLimit * 2);
    }
  };


  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }

    return null;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    var secondBucket = [];

    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key || bucket[i][0] === undefined) {
          size--;
          continue;
        }
        secondBucket.push(bucket[i]);
      }
    }

    storage[index] = secondBucket.length === 0 ? undefined : secondBucket;

    if (size < (storageLimit * .25)) {
      result.resize(storageLimit / 2);
    }
  }

  result.resize = function(newLimit) {
    size = 0;
    storageLimit = newLimit;
    var oldStorage = storage;
    storage = [];

    for (var i = 0; i <  oldStorage.length; i++) {
      var bucket = oldStorage[i];

      if (!bucket) { continue; }

      for (var j = 0; j < bucket.length; j++) {
        var key = bucket[j][0];
        var value = bucket[j][1];
        result.insert(key, value);
      }
    }
  }

  return result;
};