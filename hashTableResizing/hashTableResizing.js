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

  result.insert = function(string) {
    let index = getIndexBelowMaxForKey(string, storageLimit);
    if (size <= storageLimit * 3 / 4) {
      storage[index] = [index, string];
      size++;
    } else if (size > storageLimit * 3 / 4) {
      storageLimit *= 2;
      storage[index] = [index, string];
      size++;
    }
  };

  result.retrieve = function(string) {
    let index = getIndexBelowMaxForKey(string, storageLimit);
   if (storage[index]) return storage[index][1];
   return null;
  };

  result.remove = function(string) {
    let index = getIndexBelowMaxForKey(string, storageLimit);
    delete storage[index];
    size--;
    if (size < storageLimit / 4) storageLimit /= 2;
  };
  return result;
};
