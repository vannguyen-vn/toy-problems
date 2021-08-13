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
    var bucket = storage[index];

    if (bucket === undefined) {
      bucket = [];
      bucket.push([key, value]);
      size++
    } else {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
        }
      }
      bucket.push([key, value]);
      size++
    }
    if (size > (storageLimit*(3/4))) {
      storageLimit = storageLimit * 2;
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        size--;
      }
    }
    if (size < (storageLimit*(1/4))) {
      var count = storageLimit / 2;
      while (count > 0) {
        for (var i = 0; i < storage.length; i++) {
          if (storage[i] === undefined) {
            storage.splice(i, 1);
            i--;
            count--
          }
        }
      }
      storageLimit = storageLimit / 2;
    }
  };

  return result;
};
