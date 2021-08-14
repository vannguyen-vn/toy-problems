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

  result.insert = function(k, v) {
    // TODO: implement `insert`
    // use hash function to get index
    var index = getIndexBelowMaxForKey(k, storageLimit);
    // if storage at index is undefined
    if (this[index] === undefined) {
      // store value at index
      this[index] = [[k, v]];
      // else
    } else {
      // push k and v at the end as array
      this[index].push([k, v]);
    }
    size++;
    if (size === ((3/4) * storageLimit)) {
      storageLimit * 2;
    }
  };

  result.retrieve = function(k) {
    // TODO: implement `retrieve`
    // use hash function to get the index
    var index = getIndexBelowMaxForKey(k, storageLimit);
    // if key at index matches k
    if (this[index][0][0] === k) {
      // use the index to retrieve the value
      return this[index][0][1];
    // else
    } else {
      // iterate through the index
      for (var i = 0; i < index.length; i++) {
        // match k with key
        if (this[index][i][0] === k) {
          // return value
          return this[index][i][1];
        }
      }
    }
  };

  result.remove = function(k, v) {
    // TODO: implement `remove`
    if
    // use hash function with key to get the index
    var index = getIndexBelowMaxForKey(k, storageLimit);
    // iterate through index
    for (var i = 0; i < index.length; i++) {
      // match k to the key at index
      if (this[index][i][0] === k && this[index][i][1] === v) {
      // delete k v pair
      this[index].splice(i, 1);
      size--;
      }
    }
  };

  return result;
};
