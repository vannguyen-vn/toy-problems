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

    var bucket = storage[index] || [];

    if (bucket.length === 0) {
      bucket.push([key, value]);
      size++;
    } else {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
      bucket.push([key, value]);
      size++;
    }

    if (size >= storageLimit * 0.75) {
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);

    var bucket = storage[index]

    if (bucket.length > 0) {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    } else {
      return;
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);

    var bucket = storage[index]

    if (bucket.length > 0) {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          size--;
        }

        if (size <= storageLimit * 0.25) {
          resize(storageLimit / 2);
        }
        return bucket[i][1]
      }
    }
  };

  var resize = function(newMax) {
    // create an array to store all tuples
    var tuples = [];
    // iterate through storage array
    for (var i = 0; i < storage.length; i++) {
      var bucket = storage[i]
      // if current bucket is empty, skip
      if (bucket.length === 0) {
        continue;
      }
      // iterate through bucket
      for (var j = 0; j < bucket.length; j++) {
        if (!bucket[j]) {
          continue;
        }
        // push all tuples to tuples array
        tuples.push(bucket[j])
      }
    }
    // set the new size of storage array
    storageLimit = newMax;
    // reset the storage array
    storage = [];
    // reset size count
    size = 0;
    for (i = 0; i < tuples.length; i++) {
      // reinsert key/value pairs inside of HashTable
      result.insert(tuples[i][0], tuples[i][1]);
    }
  };

  return result;
};

