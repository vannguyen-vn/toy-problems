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

  result.insert = function(key, value
  ) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!result.storage[index]) {
      result.storage[index].push([key, value]);
    }
    return index;
  };

  result.retrieve = function(key
  ) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!result.storage[index]) {
      return null;
    }
    for (var i = 0; i < result.storage[index].length; i++) {
      if (result.storage[index][0]) {
        return result.storage[index][1];
      }
    }
  };

  result.remove = function(/*...*/
  ) {
    // TODO: implement `remove`
  };
  // if the size too large, double storage Limit
  // if the size too small, half storage limit
  return result;
};
