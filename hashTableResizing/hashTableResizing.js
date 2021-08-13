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
    // TODO: implement `insert`
    //add the key and value as a nested array in the bucket (also an array, the value of a given key)
    var bucketIndex = getIndexBelowMaxForKey(key, storageLimit);
    if (result[bucketIndex]) {
      result[bucketIndex].push([key, value]);
    } else {
      result[bucketIndex] = [[key, value]];
    }
    storage.splice(bucketIndex);
    //check storageLimit size
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve`
    // given a key, convert the key to an index and then search the array at that index for the key/value pair
  };

  result.remove = function(key) {
    // TODO: implement `remove`
    // retrieve the key-value pair
    // change it or delete [I DON'T REMEMBER HOW ANY OF THIS WORKS]
    //
  };

  return result;
};
