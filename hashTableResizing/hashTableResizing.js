
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
    var bucketIndex = getIndexBelowMaxForKey(key, storageLimit);
    var tuple = [key, value];
    if (storage[bucketIndex] === undefined) {
      storage[bucketIndex] = [];
      storage[bucketIndex].push(tuple);
    } else {
      var found = false;
      var bucket = storage[bucketIndex];
      for (var i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key) {
          bucket[i][1] === value;
          found = true;
        }
      }
      if (!found) {
        bucket.push(tuple);
      }
    }
    size++;
    if (size / storageLimit > 3 / 4) {
      var oldStorage = storage.slice();
      storageLimit = storageLimit * 2;
      storage = [];
      size = 0;
      for (var j = 0; j < oldStorage.length; j++) {
        var oldBucket = oldStorage[j];
        if (oldBucket) {
          for(var k = 0; k < oldBucket.length; k++) {
            var oldTuple = oldBucket[k];
            this.insert(oldTuple[0], oldTuple[1]);
          }
        }
      }
    }
  };

  result.retrieve = function(key) {
    var result;
    var bucketIndex = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[bucketIndex];
    if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                result = bucket[i][1];
            }
        }
    }
    return result;
  };

  result.remove = function(key) {
    var bucketIndex = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[bucketIndex];
    if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                size--;
            }
        }
    } else {
        return;
    }

    if (size / storageLimit < 1 / 4) {
      var oldStorage = storage.slice();
      storage = [];
      storageLimit = storageLimit / 2;
      size = 0;
      for (var j = 0; j < oldStorage.length; j++) {
        var oldBucket = oldStorage[j];
        if (oldBucket) {
          for (var k = 0; k < oldBucket.length; k++) {
            var oldTuple = oldBucket[k];
            result.insert(oldTuple[0]; oldTuple[1]);
          }
        }
      }
    }
  };

  return result;
};
