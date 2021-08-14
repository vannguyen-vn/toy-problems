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
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, result.storageLimit);
    if (result.storage[index] === undefined) {
      result.storage[index] = [];
      result.storage[index].push([key, value]);
      result.size++;
    } else {
     result.storage[index].push([key, value]);
    }

    if (result.size / result.storageLimit > 0.75) {
      result.storageLimit = result.storageLimit * 2;
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, result.storageLimit);
    var bucket = result.storage[index];
    for (var tupple of bucket) {
      if (tupple[0] === key) {
        return tupple[1];
      }
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, result.storageLimit);

    var bucket = result.storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        if (bucket.length === 1) {
          var removed = bucket.splice(i, 1);
          result.storage.splice(index, 1);
          result.size--;
          break;
        } else {
          var removed = bucket.splice(i, 1);
          break;
        }
      }
    }

    if (result.size / result.storageLimit < 0.25) {
      result.storageLimit = result.storageLimit / 2;
    }

    return removed;
  };

  return result;
};

